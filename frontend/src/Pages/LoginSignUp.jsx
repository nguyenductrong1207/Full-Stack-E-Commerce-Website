import React, { useState } from "react";
import "./CSS/LoginSignUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
    let responseData;

    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    let responseData;

    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  return (
    <Container className="mt-4 mb-4">
      <Form>
        <h1>{state}</h1>

        {state === "Sign Up" ? (
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Your name"
              name="username"
              value={formData.username}
              onChange={changeHandler}
            />
          </Form.Group>
        ) : (
          <></>
        )}

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </Form.Group>

        {state === "Sign Up" ? (
          <Form.Group className="mb-3" controlId="login">
            <Form.Label>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setState("Login");
                }}
              >
                Login Here
              </span>
            </Form.Label>
          </Form.Group>
        ) : (
          <Form.Group className="mb-3" controlId="login">
            <Form.Label>
              Create an account?{" "}
              <span
                onClick={() => {
                  setState("Sign Up");
                }}
              >
                Click Here
              </span>
            </Form.Label>
          </Form.Group>
        )}

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="By continuing, I agree to the terms os use & privacy policy."
          />
        </Form.Group>

        <Button
          variant="primary"
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginSignUp;
