import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu';
import Public from './routes/Public';
import AuthProvider from './Context/AuthContext';
import BgVideo from './Background/BgVideo';
import './App.css'; // Import a CSS file for styling
import LogoutButton from './Components/Logout';

function App() {
  const [login, setLogin] = useState(false);

  return (
    <AuthProvider>
      <div className="App">
        <BgVideo />
        <Router>
          <div className="content-wrapper">
            <Menu login={login} />
            <Public setLogin={setLogin} />
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;