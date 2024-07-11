import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "../Item/Item";
import Button from "react-bootstrap/Button";
import config from "../../config";
import { ShopContext } from "../../Context/ShopContext";

const RelatedBook = () => {
  // BaseURL
  const url = config.url;

  const [related, setRelated] = useState([]);
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    fetch(url + "/relatedBook")
      .then((res) => res.json())
      .then((data) => setRelated(data));
  }, []);

  return (
    <Container>
      <h2 className="mt-5 mb-4">Related Book</h2>
      <Row>
        {related.map((book) => {
          return (
            <Col md="3" key={book.id} className="mb-5">
              <Item
                id={book.id}
                name={book.name}
                image={book.image}
                newPrice={book.newPrice}
                oldPrice={book.oldPrice}
              />
              <Button
                variant="primary"
                onClick={() => {
                  addToCart(book.id);
                }}
                className="mt-3"
              >
                Add To Cart
              </Button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default RelatedBook;
