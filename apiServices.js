import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export function create (payload){
  return fetch("http://localhost:3000/users",{
    method: "POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(payload)
  }).then(res=>res.json())
}

export function login (payload){
  return fetch("http://localhost:3000/users/login",{
    method: "POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(payload)
  }).then(res=>res.json())
}

export async function getAllProductos(){
  return fetch ('http://localhost:3000/productos/')

  .then((res) => res.json())
}
export async function getByIdProductos(id,token){
  return fetch (`http://localhost:3000/productos/${id}`,{
    headers:{
      "x-access-token":token
    }
  })
  .then((res) => res.json ())
}

export const updateProducto = async (id, updatedData, token) => {
  const url = `${API_BASE_URL}/productos/${id}`; // Ajusta la URL según tu API

  try {
    const response = await axios.put(
      url,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Agrega el token de autorización
          'Content-Type': 'application/json',
        },
      }
    );

    // Si la actualización es exitosa, puedes devolver la respuesta o cualquier otro dato que necesites
    return response.data;
  } catch (error) {
    // Maneja los errores según tus necesidades (puedes lanzar una excepción o devolver un objeto de error)
    throw error;
  }
};
export async function deleteMerc(id){

  return("a")
}
    
