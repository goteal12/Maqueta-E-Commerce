import React from "react"
import { Link } from "react-router-dom"
import {Button, Card, Col } from 'react-bootstrap';
import { useAuthContext } from "./Context/AuthContext";

const styles = {
  card:{
    width: '25em',
    marginBottom: "30px"
  },
  buttons:{
    marginRight: "50px"
  },
  image:{
    width: '30%', // Set the image width to 100% of the container
    marginBottom: "20px"
  }
}

function Apicentral({
  id,
  name,
  price,
  description,
  imagen,
}){
  const {token} = useAuthContext();
  console.log(token)
  console.log("props",{id,name,price,description,imagen})
  return (
    <>
    <Col xs={12} sm={12} lg={6} xxl={6}>
      <Card style={styles.card}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {price}
        {"$"}
        </Card.Text>
        <Card.Text>
        {description}
        </Card.Text>
        <Card.Text style={styles.image}>
  <img src={imagen} alt={name} style={{ maxWidth: '150%' }} />
</Card.Text>
        <Button style={styles.buttons} as={Link} to={`/productos/${id}`} variant="secondary"> Ver Detalle
        </Button>
        {token && (
              <Button style={styles.buttons} as={Link} to={`/editar/${id}`} variant="secondary">Editar</Button>
            )}
      </Card.Body>
    </Card>
    </Col>
    </>
  )
}

export default Apicentral;