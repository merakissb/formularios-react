/*
Este componente representa una alerta que muestra un mensaje
en función de su variante (success o danger).
*/

import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = (props) => {

  const { variant, message } = props;

  return (
    <BootstrapAlert variant={variant}>
      {message}
    </BootstrapAlert>
  );
};

export default Alert;
