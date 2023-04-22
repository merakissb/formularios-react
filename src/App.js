import React, { useState } from 'react';
import Login from './components/login';
import Alert from './components/alert';
import Dictionary from './universal/dictionary/es';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = (isValid) => {
    setIsLoggedIn(isValid);
    setAlertMessage(isValid ? Dictionary.alerts.success.message : Dictionary.alerts.danger.message);
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
