import React, { useContext, useState } from "react";
import "./Style.css";
import logo from "../Assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { ShopContext } from "../../Context/ShopContext";

const Menu = () => {
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              Home
              {/* <Link to="/">Home</Link> */}
            </Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="/education">
                Education
                {/* <Link to="/education">Education</Link> */}
              </NavDropdown.Item>
              <NavDropdown.Item href="/comic">
                Comic
                {/* <Link to="/comic">Comic</Link> */}
              </NavDropdown.Item>
              <NavDropdown.Item href="/technology">
                Technology
                {/* <Link to="/technology">Technology</Link> */}
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Link to="/login"> */}
            {/* </Link> */}
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cart">
              Cart
              {/* <Link to="/cart">Cart</Link> */}
              <Badge bg="secondary">{getTotalCartItems()}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
