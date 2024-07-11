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
      <Row className="mb-5">
        <Col md="4">
          <Image src={book.image} thumbnail />
        </Col>
        <Col md="8">
          <Row>
            <Col md="12">
              {" "}
              <p>{book.name}</p>
            </Col>
            <Col md=""></Col>
            <Col md=""></Col>
          </Row>
          <Row>
            <Col md="">
              {" "}
              <p>{book.author}</p>
            </Col>
            <Col md="">
              {" "}
              <p>{book.publicationDate}</p>
            </Col>
            <Col md=""></Col>
          </Row>
          <Row>
            <Col md="">
              <p>{book.description}</p>{" "}
            </Col>
          </Row>
          <Row>
            <Col md="">
              {" "}
              <p>$ {book.salePrice}</p>
            </Col>
            <Col md="">
              {" "}
              <p>
                <del>${book.price}</del>
              </p>{" "}
            </Col>
            <Col md="">
              {" "}
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
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetail;
