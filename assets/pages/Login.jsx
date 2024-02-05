import React from "react";
import { Form,Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import { AuthContext, useAuthContext } from "../../Context/AuthContext";
import { login } from "../../apiServices";
import "../../Estilos/Estilos.css"


function Login() {

const {
  register,
  handleSubmit,
  formState: {errors},
} =useForm({mode: "onChange"});

const { handleLogin }= useAuthContext();

const navigate = useNavigate()

const onSubmit = async data => {
  try {
      console.log('onSubmit called');

      const user = await login(data);
      console.log(user);
      if (user?.token) {
          handleLogin(user);
          navigate('/inicio'); // Navigate after successful login
      }
  } catch (e) {
      console.log(e);
  }
}

    return(
     

      <div>
        <h3 className="bg-react"> Por favor ingrese sus datos</h3>
             <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="words">Email </Form.Label>
        <Form.Control className="words" type="email" placeholder="Ingresar email"{...register("email",{required: true})} />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="words">Contraseña</Form.Label>
        <Form.Control className="words" type="password" placeholder="Contraseña"{...register("password",{required: true})} />
        <Form.Text>
          {errors.password?.type==="required" && <span>This field is required</span>}
          {errors.password?.type==="minLength" && <span>Debe colocar al menos 6 caracteres</span>}
          {errors.password?.type==="maxLength" && <span>No puede superar 12 caracteres</span>}
          </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit"> Ingresar </Button>
    </Form>
         
    </div>
  
    )
    }
    

export default Login;

