import React from "react";
import "./Style.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";

const Breadcrum = (props) => {
  const { book } = props;

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Shop</Breadcrumb.Item>
        <Breadcrumb.Item href={`/${book.category}`}>
          {book.category}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{book.name}</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default Breadcrum;
