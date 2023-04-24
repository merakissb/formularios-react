/*
Este componente representa una alerta que muestra un mensaje
en función de su variante (success o danger).

Tiene una función handleClose que se ejecuta cuando se cierra la alerta
y llama a la función onClose si se proporciona.

Tiene un timeout de 2 segundos para cerrarse automáticamente.
*/

import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ variant, message, onClose, show }) => {
  const handleClose = () => onClose ? onClose() : null;

  setTimeout(() => {
    handleClose();
  }, 2000);

  return (
    <BootstrapAlert variant={variant} onClose={handleClose} dismissible show={show}>
      {message}
    </BootstrapAlert>
  );
};

export default Alert;
