import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyPagination from "../Components/Pagination/MyPagination";
import Popular from "../Components/Popular/Popular";

const ShopCategories = (props) => {
  const { allBooks } = useContext(ShopContext);

  return (
    <Container>
      <h2>Banner Without CSS</h2>
      <img src={props.banner} alt="banner" />
      <Row>
        {allBooks.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Col>
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                />
              </Col>
            );
          } else {
            return null;
          }
        })}
      </Row>
      <MyPagination/>
      <Popular/>
    </Container>
  );
};

export default ShopCategories;
