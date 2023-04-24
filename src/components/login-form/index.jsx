/*
Este componente representa un formulario de inicio de sesión con dos campos:
uno para el correo electrónico y otro para la contraseña.

Utiliza el estado de React para manejar los valores de entrada
de los campos de correo electrónico y contraseña.

Tiene una función handleSubmit que se ejecuta cuando se envía el formulario.
Verifica si los campos de correo electrónico y contraseña son válidos y, si es así,
llama a la función onSubmit pasando los valores de correo electrónico y contraseña ingresados.
*/

import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Dictionary from './config/dictionary/es';
import './style.css';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>{Dictionary.form.fields.password.label}</Form.Label>
              <Form.Control
                type="password"
                placeholder={Dictionary.form.fields.password.placeholder}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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