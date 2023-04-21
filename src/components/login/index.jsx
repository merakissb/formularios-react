import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Dictionary from './config/dictionary/es';
import './style.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsFormValid(emailValue.trim() !== '' && password.trim() !== '');
  };


  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setIsFormValid(email.trim() !== '' && passwordValue.trim() !== '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = (email === 'admin@gmail.com' && password === 'admin');
    onLogin(isValid);
    setEmail('');
    setPassword('');
    setIsFormValid(false);
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
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>{Dictionary.form.fields.password.label}</Form.Label>
              <Form.Control
                type="password"
                placeholder={Dictionary.form.fields.password.placeholder}
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!isFormValid}>
              {Dictionary.form.submit}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;