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
