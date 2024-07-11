import React, { useContext } from "react";
import "./Style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div>
      <Row>
        <Col md="3">
          <a href={`/book/${props.id}`}>
            <Image src={props.image} className="img" />
          </a>
        </Col>
        <Col md="9">
          <Row className="mx-2">
            <h3>{props.name}</h3>
            <Col md="3">
              <p>${props.salePrice}</p>
            </Col>
            <Col md="9">
              <p>
                <del>${props.price}</del>
              </p>
            </Col>
            <Col md="6">
              <Button
                variant="primary"
                onClick={() => {
                  addToCart(props.id);
                }}
                className="mt-3"
              >
                Add To Cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Item;
