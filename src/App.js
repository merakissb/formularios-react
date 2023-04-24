/*
Este componente principal representa la aplicación en su conjunto.
Utiliza el estado de React para manejar el estado de inicio de sesión (isLoggedIn)
y el mensaje de alerta (alertMessage).

Tiene una función handleLogin que se ejecuta cuando se envía el formulario de inicio de sesión
y llama a la función de autenticación del servicio authService.

Tiene una función handleCloseAlert que se ejecuta cuando se cierra la alerta
y borra el mensaje de alerta.

Renderiza el componente de Alert si hay un mensaje de alerta y renderiza el componente de Login
pasando la función de manejo de inicio de sesión (handleLogin) como una prop.
*/

import React, { useState } from 'react';
import Login from './components/login';
import Alert from './components/alert';
import authService from './universal/services/authService';
import Dictionary from './universal/dictionary/es';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.authenticate());
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = (email, password) => {
    const response = authService.authenticate(email, password);
    if (response) {
      setIsLoggedIn(true);
      setAlertMessage(Dictionary.alerts.success.message);
    } else {
      setIsLoggedIn(false);
      setAlertMessage(Dictionary.alerts.danger.message);
    }
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
