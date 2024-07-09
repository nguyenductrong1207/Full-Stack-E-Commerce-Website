import React, { useContext } from "react";
import logo from "../Assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { ShopContext } from "../../Context/ShopContext";
import Button from "react-bootstrap/Button";

const Menu = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="/education">Education</NavDropdown.Item>
              <NavDropdown.Item href="/comic">Comic</NavDropdown.Item>
              <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
            </NavDropdown>

            {localStorage.getItem("auth-token") ? (
              <div>
                {" "}
                <Button
                  variant="primary"
                  onClick={() => {
                    localStorage.removeItem("auth-token");
                    window.location.replace("/");
                  }}
                >
                  Logout
                </Button>
                <Button variant="primary">Profile</Button>
              </div>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}

            <Nav.Link href="/cart">
              Cart
              <Badge bg="secondary">{getTotalCartItems()}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
