import Inicio from '../assets/pages/Inicio';
import { Route, Routes } from 'react-router-dom';
import Detalle from '../assets/pages/Detalle';
import Registro from '../assets/pages/Registro';
import Login from '../assets/pages/Login';
import Editar from '../assets/pages/Editar';
function Public({setLogin}) {
  
  return (

        <Routes>
          <Route path='/' element= { <Inicio />}/>
          <Route path='/editar/:id' element= { <Editar />}/>
          <Route path='/inicio' element= { <Inicio />}/>
          <Route path='/productos/:id' element= { <Detalle />}/>
          <Route path='/registro' element= { <Registro />}/>
          <Route path='/Login' element= { <Login setLogin={setLogin} />}/>


        </Routes>
    

  )
}

export default Public;
