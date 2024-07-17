import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
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
      <h2 className="mb-4">Related Book</h2>
      {related.slice(0, 3).map((book) => {
        return (
          <Row key={book.id}>
            <Col md="" className="mb-5">
              <Row>
                <Col md="3">
                  <a href={`/book/${book.id}`}>
                    <Image src={book.image} className="img" />
                  </a>
                </Col>
                <Col md="9">
                  <Row className="mx-2">
                    <h4>{book.name}</h4>
                    <Col md="3">
                      <p>${book.salePrice}</p>
                    </Col>
                    <Col md="9">
                      <p>
                        <del>${book.price}</del>
                      </p>
                    </Col>
                    <Col md="6">
                      {" "}
                      <Button
                        variant="primary"
                        onClick={() => {
                          addToCart(book.id);
                        }}
                        className="mt-3"
                      >
                        Add To Cart
                      </Button>{" "}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default RelatedBook;
