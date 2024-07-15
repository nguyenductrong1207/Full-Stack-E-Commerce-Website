import React from "react";
import "./Style.css";
import Nav from "react-bootstrap/Nav";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link href="/listBook">Book Management</Nav.Link>
        <Nav.Link href="/listUser">User List</Nav.Link>
        <Nav.Link href="/listPublisher">Publisher Management</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
