import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "../Item/Item";
import Button from "react-bootstrap/Button";
import { ShopContext } from "../../Context/ShopContext";

const Popular = () => {
  // const url = "http://localhost:4000";

  // backend server url
  const url = "https://backend-e-commerce-website-using-mern.onrender.com";

  const [popular, setPopular] = useState([]);
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    fetch(url + "/popularInEducation")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <Container>
      <h2>Popular</h2>
      <Row>
        {popular.map((book) => {
          return (
            <Col key={book.id}>
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

export default Popular;
