import React, { useContext } from "react";
import logo from "../Assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { ShopContext } from "../../Context/ShopContext";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaCartPlus } from "react-icons/fa";
import "./Style.css";

const Menu = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <Container className="">
      <Row className="header my-2">
        <Navbar expand="lg" className="">
          <Col md="3">
            {" "}
            <Navbar.Brand href="/">
              <Image src={logo} className="d-inline-block align-top" />
            </Navbar.Brand>
          </Col>

          <Col md="6" className="px-4">
            {" "}
            <InputGroup className="my-input-group">
              <DropdownButton
                variant="outline-secondary"
                title="Select One"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Category 1</Dropdown.Item>
                <Dropdown.Item href="#">Category 2</Dropdown.Item>
                <Dropdown.Item href="#">Category 3</Dropdown.Item>
                <Dropdown.Item href="#">Category 4</Dropdown.Item>
              </DropdownButton>
              <Form.Control placeholder="Search Books Here" aria-label="" />
            </InputGroup>
          </Col>
          <Col md="3">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/cart">
                  <FaCartPlus className="cart-icon" />
                  <Badge bg="" className="myBadge">{getTotalCartItems()}</Badge>
                </Nav.Link>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">My Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/cart">
                    Shopping Cart
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/">Order History</NavDropdown.Item>
                  {localStorage.getItem("auth-token") ? (
                    <div>
                      {" "}
                      <NavDropdown.Item>
                        <Button
                          variant="primary"
                          onClick={() => {
                            localStorage.removeItem("auth-token");
                            window.location.replace("/");
                          }}
                        >
                          Logout
                        </Button>
                      </NavDropdown.Item>
                    </div>
                  ) : (
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  )}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>{" "}
          </Col>
        </Navbar>
      </Row>
      <hr />
      <Row className="menu my-2">
        {" "}
        <Navbar expand="lg" className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="/" className="menu-item">Home</Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown" className="menu-item">
                <NavDropdown.Item href="/education">Education</NavDropdown.Item>
                <NavDropdown.Item href="/comic">Comic</NavDropdown.Item>
                <NavDropdown.Item href="/technology">
                  Technology
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/" className="menu-item">Books</Nav.Link>
              <Nav.Link href="/" className="menu-item">News</Nav.Link>
              <Nav.Link href="/" className="menu-item">About Us</Nav.Link>
              <Nav.Link href="/" className="menu-item">Contact Us</Nav.Link>
              <Nav.Link href="/" className="menu-item">FAQ's</Nav.Link>
            </Nav>
          </Navbar.Collapse>{" "}
        </Navbar>
      </Row>
    </Container>
  );
};

export default Menu;
