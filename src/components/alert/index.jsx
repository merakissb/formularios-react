import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ variant, message, onClose }) => {

  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <BootstrapAlert variant={variant} onClose={handleClose} dismissible>
      {message}
    </BootstrapAlert>
  );
};

export default Alert;
