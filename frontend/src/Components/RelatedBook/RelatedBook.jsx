import React from "react";
import "./Style.css";
import dataBooks from "../Assets/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "../Item/Item";

const RelatedBook = () => {
  return (
    <Container>
      <h2>Related Book</h2>
      <Row>
        {dataBooks.map((book, i) => {
          return (
            <Col key={book.id}>
              <Item
                id={book.id}
                name={book.name}
                image={book.image}
                newPrice={book.newPrice}
                oldPrice={book.oldPrice}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default RelatedBook;
