import React, { useState, useEffect } from "react";
import { getAllProductos } from "../../apiServices";
import Apicentral from "../../Apicentral";
import { Row } from "react-bootstrap";
import './inicio.css';
import Loading from "../../Loading/Loading";
import '../../Estilos/Estilos.css';

function Inicio() {
  const name = (
    <div className="nine">
      <h1>Welcome to Walki<span>please go ahead</span></h1>
    </div>
  );

  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProductos(); // Removed the token parameter
        console.log("API Response:", response);

        if (Array.isArray(response.docs)) {
          setApi(response.docs);
          setIsLoading(false);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Removed token from dependency array

  return (
    <Loading loading={isLoading}>
      <div>
        <h1>{name}</h1>
        <Row>
          {api.map(apicentral => (
            <Apicentral 
              key={apicentral.id}
              {...apicentral.data}
              id={apicentral.id}
              name={apicentral.name}
              price={apicentral.price}
              description={apicentral.description}
              imagen={apicentral.imagen} 
            />
          ))}
        </Row>
      </div>
    </Loading>
  );
}

export default Inicio;