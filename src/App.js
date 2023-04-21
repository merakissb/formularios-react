import React, { useState } from 'react';
import Login from './components/login';
import Alert from './components/alert';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = (isValid) => {
    setIsLoggedIn(isValid);
    setAlertMessage(isValid ? 'Sesión iniciada correctamente.' : 'Datos ingresados incorrectos.');
  };

  const handleCloseAlert = () => {
    setAlertMessage('');
  };

  return (
    <>
      {alertMessage &&
        <Alert
          variant={isLoggedIn ? 'success' : 'danger'}
          onClose={handleCloseAlert}
          message={alertMessage}
        />
      }
      <Login onLogin={handleLogin} />
    </>
  );
};

export default App;
