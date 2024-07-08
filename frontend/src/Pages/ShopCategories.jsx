import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyPagination from "../Components/Pagination/MyPagination";
import Popular from "../Components/Popular/Popular";
import Button from "react-bootstrap/Button";

const ShopCategories = (props) => {
  const { allBooks, addToCart } = useContext(ShopContext);

  return (
    <Container>
      <h2>Banner Without CSS</h2>
      <img src={props.banner} alt="banner" />
      <Row>
        {allBooks.map((book, i) => {
          if (props.category === book.category) {
            return (
              <Col>
                <Item
                  key={i}
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
          } else {
            return null;
          }
        })}
      </Row>
      <MyPagination />
      <Popular />
    </Container>
  );
};

export default ShopCategories;
