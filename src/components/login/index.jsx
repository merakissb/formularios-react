import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Dictionary from './config/dictionary/es';
import './style.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    return (email.trim() !== '' && password.trim() !== '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onLogin(email, password);
      setEmail('');
      setPassword('');
    }
  };

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

export default Login;