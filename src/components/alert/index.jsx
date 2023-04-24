/*
Este componente representa una alerta que muestra un mensaje
en función de su variante (success o danger).
*/

import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ variant, message, onClose }) => {

  return (
    <BootstrapAlert variant={variant} onClose={onClose} dismissible>
      {message}
    </BootstrapAlert>
  );
};

export default Alert;
