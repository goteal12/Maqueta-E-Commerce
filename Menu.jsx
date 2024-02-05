import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useAuthContext } from './Context/AuthContext';
import './Estilos/Estilos.css';
import LogoutButton from './Components/Logout';
import Logo from '../src/Logo/Logo.png';

function Menu() {
  const { login } = useAuthContext();

  let myStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 1000,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    zIndex: 1000,
  };

  let logoStyles = {
    position: 'absolute',
    top: '-40px', // Adjust as needed
    right: '10px', // Adjust as needed
    maxHeight: '70px',
    borderRadius: '50%',
  };
  return (
    <>
      <Navbar expand="" style={myStyles}>
        <Container>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                {!login && (
                  <>
                    <Nav.Link as={Link} to="inicio">
                      <Button variant="warm">Inicio</Button>
                    </Nav.Link>

                    <Nav.Link as={Link} to="login">
                      <Button variant="warm">Login (admin)</Button>
                    </Nav.Link>
                  </>
                )}
                {login && (
                  <>
                    <Nav.Link as={Link} to="inicio">
                      <Button variant="warm">Inicio</Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to="registro">
                      <Button variant="warm">Registro</Button>
                    </Nav.Link>
                    <Nav.Link>
                      <LogoutButton />
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      {/* Logo */}
      <img src={Logo} alt="Logo" style={logoStyles} />
    </>
  );
}

export default Menu;