import React, { useState } from "react";
import "./Style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const DescriptionBox = () => {
  const [key, setKey] = useState("description");

  return (
    <Container>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="description" title="Description">
          Tab content for Description
        </Tab>
        <Tab eventKey="reviews" title="Reviews">
          Tab content for Reviews
        </Tab>
      </Tabs>
    </Container>
  );
};

export default DescriptionBox;
