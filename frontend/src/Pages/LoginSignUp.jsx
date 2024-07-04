import React from "react";
import "./CSS/LoginSignUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const LoginSignUp = () => {
  return (
    <Container>
      <Form>
        <h1>Sign Up</h1>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Your password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="login">
          <Form.Label>
            Already have an account? <span>Login Here</span>
          </Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="By continuing, I agree to the terms os use & privacy policy."
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginSignUp;
