import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "../Item/Item";
import Button from "react-bootstrap/Button";
import config from "../../config";

const RelatedBook = () => {
  // BaseURL
  const url = config.url;
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(url + "/relatedBook")
      .then((res) => res.json())
      .then((data) => setRelated(data));
  }, []);

  return (
    <Container>
      <h2 className="mb-4">Related Book</h2>
      {related.map((book) => {
        return (
          <Row>
            <Col md="" key={book.id} className="mb-5">
              <Item
                id={book.id}
                name={book.name}
                description={book.description}
                price={book.price}
                salePrice={book.salePrice}
                quantity={book.quantity}
                language={book.language}
                publicationDate={book.publicationDate}
                numPages={book.numPages}
                image={book.image}
                author={book.author}
                category={book.category}
                publisher={book.publisher}
              />
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default RelatedBook;
