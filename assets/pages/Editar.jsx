import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getByIdProductos, updateProducto } from "../../apiServices"; // Asumo que existe una función updateProducto en tus apiServices
import Loading from "../../Loading/Loading";
import { Button, Form } from "react-bootstrap";
import { useAuthContext } from "../../Context/AuthContext";

function Editar() {
  const { id } = useParams();

  const [apis, setApis] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({}); // Estado para almacenar los datos editados
  const { token } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mercaderiadata = await getByIdProductos(id, token);
        if (mercaderiadata) {
          setApis(mercaderiadata);
          setEditedData(mercaderiadata); // Inicializa los datos editados con los datos actuales
        }

        setIsloading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [id, token]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      // Realiza la solicitud para actualizar el producto con los datos editados
      await updateProducto(id, editedData, token);
      setIsEditing(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(apis); // Restaura los datos originales al cancelar la edición
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (token) {
    return (
      <Loading loading={isLoading}>
        <div>
          <Button variant="primary">
            <Link to="/inicio" className="text-dark">
              Inicio
            </Link>
          </Button>

          {isEditing ? (
            <>
              {/* Muestra un formulario de edición cuando se está editando */}
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    value={editedData.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formPrice">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Precio"
                    name="price"
                    value={editedData.price}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formDescription">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Descripción"
                    name="description"
                    value={editedData.description}
                    onChange={handleChange}
                  />
                </Form.Group>
                
                <Form.Group controlId="formImagen">
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Imagen"
                    name="imagen"
                    value={editedData.imagen}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button variant="success" onClick={handleSave}>
                  Guardar
                </Button>{" "}
                <Button variant="danger" onClick={handleCancel}>
                  Cancelar
                </Button>
              </Form>
            </>
          ) : (
            <>
              {/* Muestra la información normal cuando no se está editando */}
              <h1>{apis.name}</h1>
              <img src={apis.imagen} style={{ maxWidth: "30%" }} alt="Producto" />
              <p>Precio en efectivo: {apis.price}</p>
              <p>{apis.description}</p>
              <Button variant="success" onClick={handleEdit}>
                Editar
              </Button>
            </>
          )}
        </div>
      </Loading>
    );
  } else  {
    return <div>No estas autorizado para editar</div>
  }
}

export default Editar;