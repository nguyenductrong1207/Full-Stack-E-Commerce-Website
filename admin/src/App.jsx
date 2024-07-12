import React from "react";
import Menu from "./Components/Menu/Menu";
import Admin from "./Pages/Admin/Admin";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <Row>
      <Menu />
      <Col md="2" style={{ backgroundColor: "white" }}>
        <Sidebar />
      </Col>
      <Col md="10">
        <Admin />
      </Col>
    </Row>
  );
};

export default App;
