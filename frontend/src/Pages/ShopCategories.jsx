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
        {allBooks.map((book) => {
          if (props.category === book.category) {
            return (
              <Col md="3" key={book.id} className="mb-5 mt-5">
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
