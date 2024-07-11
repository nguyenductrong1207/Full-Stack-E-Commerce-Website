import React, { useState } from "react";
import "./Style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const DescriptionBox = (props) => {
  const [key, setKey] = useState("description");
  const { book } = props;

  return (
    <Container>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="description" title="Details">
        <Row>
            <Col md="3">
              <p>Name</p>
            </Col>
            <Col md="8">
              <p>{book.name}</p>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <p>Author</p>
            </Col>
            <Col md="8">
              <p>{book.author}</p>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <p>Language</p>
            </Col>
            <Col md="8">
              <p>{book.language}</p>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <p>Published Date</p>
            </Col>
            <Col md="8">
              <p>{book.publicationDate}</p>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <p>Publisher</p>
            </Col>
            <Col md="8">
              <p>{book.publisher}</p>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <p>Pages</p>
            </Col>
            <Col md="8">
              <p>{book.numPages}</p>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <p>Quantity</p>
            </Col>
            <Col md="8">
              <p>{book.quantity}</p>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <p>Category</p>
            </Col>
            <Col md="8">
              <p>{book.category}</p>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="reviews" title="Reviews">
          Tab content for Reviews
        </Tab>
      </Tabs>
    </Container>
  );
};

export default DescriptionBox;
