import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "../Item/Item";
import Button from "react-bootstrap/Button";
import { ShopContext } from "../../Context/ShopContext";
import config from "../../config";

const NewCollection = () => {
  // BaseURL
  const url = config.url;

  const [newCollection, setNewCollection] = useState([]);
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    fetch(url + "/newcollection")
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  }, []);

  return (
    <Container>
      <h2 className="mt-5 mb-4">New Collection</h2>
      <Row>
        {newCollection.map((book) => {
          return (
            <Col md="3" key={book.id} className="mb-5">
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
          );
        })}
      </Row>
    </Container>
  );
};

export default NewCollection;
