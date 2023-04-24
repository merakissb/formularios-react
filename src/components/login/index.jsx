import React, { useState } from 'react';
import LoginForm from '../login-form';
import Alert from '../alert';
import authService from '../../universal/services/authService';
import Dictionary from './config/dictionary/es';

const Login = () => {
  const [alertVariant, setAlertVariant] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const ALERT_DURATION = 2500;

  const handleLogin = (email, password) => {
    const isAuthenticated = authService.authenticate(email, password);

    const alertVariant = isAuthenticated ? 'success' : 'danger';
    const alertMessage = isAuthenticated ? Dictionary.alerts.success.message : Dictionary.alerts.danger.message;

    setAlertVariant(alertVariant);
    setAlertMessage(alertMessage);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, ALERT_DURATION);
  };

  return (
    <>
      {showAlert && (
        <Alert
          variant={alertVariant}
          message={alertMessage}
        />
      )}
      <LoginForm onSubmit={handleLogin} />
    </>
  );
}

export default Login;
