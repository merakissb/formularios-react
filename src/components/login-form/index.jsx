/*
Este componente es un formulario de inicio de sesión que
permite al usuario ingresar su correo electrónico y contraseña.
Tiene un estado interno para almacenar los valores de correo electrónico y contraseña
y maneja la validación del formulario. Cuando se envía el formulario,
se llama a la función onSubmit pasándole el correo electrónico y la contraseña ingresados.
*/

import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Dictionary from './config/dictionary/es';
import './style.css';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { onSubmit } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit(email, password);
      setEmail('');
      setPassword('');
    }
  };

  const validateForm = () => email.trim() !== '' && password.trim() !== '';

  return (
    <Container fluid>
      <Row className='justify-content-center mt-5'>
        <Col md={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>{Dictionary.form.fields.email.label}</Form.Label>
              <Form.Control
                type="email"
                placeholder={Dictionary.form.fields.email.placeholder}
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>{Dictionary.form.fields.password.label}</Form.Label>
              <Form.Control
                type="password"
                placeholder={Dictionary.form.fields.password.placeholder}
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!validateForm()}>
              {Dictionary.form.submit}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;