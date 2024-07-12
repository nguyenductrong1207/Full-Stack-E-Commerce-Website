import React from "react";
import "./Style.css";
import Nav from "react-bootstrap/Nav";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link href="/addBook">Add Book</Nav.Link>
        <Nav.Link href="/listBook">Book List</Nav.Link>
        <Nav.Link href="/listUser">User List</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
