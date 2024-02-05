import React from "react";
import { Form,Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Alertaprin from "../../Alert/Alertaprin";
import { useState } from "react";
import { registroMessage } from "../../Utils/errorMessage";
import {useNavigate} from "react-router-dom";
import { create } from "../../apiServices";
import Loading from "../../Loading/Loading";
import { registerRequest } from "../../config/auth";


function Registro(){
  const [Alerta,setAlerta] = useState({variant:'',text:''})
  const [Loading,setIsloading]= useState(false);
const { register, handleSubmit, formState: { errors }} = useForm();
const navigate = useNavigate()

const onSubmit = async (data) =>{
  console.log(data)
try{
const document = await create(data)
if (document) {
  setAlerta({
    variant: 'success',
    text:'gracias por registrarse',
    duration: 3000,
    link: '/ingresar',
  })
  setIsloading(false);
}
  }
 catch(e){
    console.log(e)
    setAlerta({variant:'warning', text : registroMessage[e.code] ||'Se ha cometido un error en el registro de usuario'})
  }
};

    return(
        <div>
          <h1>
            Bienvenidos!!
          </h1>
             <Form onSubmit={handleSubmit( async (onSubmit) => {
            const res = await registerRequest(onSubmit)
            console.log(res)
             })}>

            
            
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el nombre"{...register("name",{required: true})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Ingresar email"{...register("email",{required: true})} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña"{...register("password",{required: true})} />
        <Form.Text>
          {errors.password?.type==="required" && <span>This field is required</span>}
          {errors.password?.type==="minLength" && <span>Debe colocar al menos 6 caracteres</span>}
          {errors.password?.type==="maxLength" && <span>No puede superar 12 caracteres</span>}
          </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
      <Alertaprin {...Alerta}  />

    </Form>

   
    </div>

         
    )
    }

export default Registro;