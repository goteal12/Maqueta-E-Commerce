import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const { handleLogout } = useAuthContext();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    handleLogout();
    navigate('/login'); // Redirect to the login page or any other page
  };
  return (
    <Button variant='warm' onClick={onLogoutClick}>
      Logout
    </Button>
  );
}

export default LogoutButton;