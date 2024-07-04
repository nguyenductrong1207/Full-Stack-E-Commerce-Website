import React from "react";
import "./Style.css";
import dataBooks from "../Assets/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <Container>
      <h2>Popular Book</h2>
      <Row>
        {dataBooks.map((item, i) => {
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
        })}
      </Row>
    </Container>
  );
};

export default Popular;
