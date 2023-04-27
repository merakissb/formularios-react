import React, { useState } from 'react';
import LoginForm from '../login-form/LoginForm';
import Alert from '../alert/Alert';
import authService from '../../services/authService';
import Dictionary from './config/dictionary/es';

const Login = () => {
  const [alertVariant, setAlertVariant] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const ALERT_DURATION = 2500;

  const handleLogin = (email, password) => {
    const isAuthenticated = authService.authenticate(email, password);

    const { alerts } = Dictionary;

    const alertVariant = isAuthenticated ? 'success' : 'danger';
    const alertMessage = isAuthenticated ? alerts.success.message : alerts.error.message;

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
        <Alert variant={alertVariant} message={alertMessage} />
      )}
      <LoginForm onSubmit={handleLogin} />
    </>
  );
}

export default Login;
