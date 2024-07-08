import React, { useContext } from "react";
import "./Style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { ShopContext } from "../../Context/ShopContext";

const BookDetail = (props) => {
  const { book } = props;
  const { addToCart } = useContext(ShopContext);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col md="3">
          <Image src={book.image} thumbnail />
        </Col>
        <Col md="9">
          <h2>{book.name}</h2>
          <p>{book.category}</p>
          <p>{book.newPrice}</p>
          <p>
            <del>{book.oldPrice}</del>{" "}
          </p>
          <Button
            variant="primary"
            onClick={() => {
              addToCart(book.id);
            }}
          >
            Add To Cart
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetail;
