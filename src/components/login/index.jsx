import React, { useState } from 'react';
import LoginForm from '../login-form';
import Alert from '../alert';
import authService from '../../universal/services/authService';
import Dictionary from './config/dictionary/es';

const Login = () => {
  const [alertVariant, setAlertVariant] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = (email, password) => {
    if (authService.authenticate(email, password)) {
      setAlertVariant('success');
      setAlertMessage(Dictionary.alerts.success.message);
    } else {
      setAlertVariant('danger');
      setAlertMessage(Dictionary.alerts.danger.message);
    }
  };

  const handleCloseAlert = () => {
    setAlertMessage('');
  };

  return (
    <>
      {alertMessage && (
        <Alert
          variant={alertVariant}
          message={alertMessage}
          onClose={handleCloseAlert}
        />
      )}
      <LoginForm onSubmit={handleLogin} />
    </>
  );
}

export default Login;
