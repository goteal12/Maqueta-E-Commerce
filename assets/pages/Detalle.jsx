import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getByIdProductos } from "../../apiServices"
import Loading from "../../Loading/Loading"
import { Button } from "react-bootstrap"
import "../../Estilos/Estilos.css"


function Detalle(){
    const {id} = useParams()
    
    const [apis,setApis] = useState({})
    const [isLoading,setIsloading] = useState(true)
    useEffect(
        ()=>{
          const result = async ()=>{
            try{
              const mercaderiadata = await getByIdProductos(id)
              if(mercaderiadata){
                setApis(mercaderiadata)
              }
              
              setIsloading(false)
            }catch(e){
              console.log(e)
            }
           
          }
          result()
        },
        [id]
      )
        return (
          
          <Loading loading={isLoading} >
                 
        <div>
          

                    <Button variant="primary">
                    <Link to="/inicio" className="text-dark">Inicio</Link>
        
                      </Button>
        
                    <h1>{apis.name}</h1>
                    <img src={apis.imagen} alt="imagen" style={{ maxWidth: '30%' }} />
                    <p>Precio en efectivo: {apis.price}</p>
                    <p>{apis.description}</p>
                    <Button variant="success">
                      Comprar
                      </Button>
                    
                  </div>
          </Loading >
          );
          }
        
      


      
          

export default Detalle