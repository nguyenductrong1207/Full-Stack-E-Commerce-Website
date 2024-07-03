import React, { useState } from "react";
import "./style.css";
import logo from "../Assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from 'react-bootstrap/Badge';

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Education</NavDropdown.Item>
              <NavDropdown.Item href="">Comic</NavDropdown.Item>
              <NavDropdown.Item href="">Technology</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="">Login</Nav.Link>
            <Nav.Link href="">
              Cart
              <Badge bg="secondary">0</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
