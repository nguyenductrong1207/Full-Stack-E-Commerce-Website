import React, { useContext } from "react";
import "./Style.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <Card border="primary" style={{ width: "18rem" }}>
      <Card.Link href={`/book/${props.id}`}>
        <Card.Img variant="top" src={props.image} />
      </Card.Link>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Card.Text>$ {props.salePrice}</Card.Text>
        <Card.Text>
          <del>$ {props.price}</del>
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            addToCart(props.id);
          }}
          className=""
        >
          Add To Cart
        </Button>{" "}
      </Card.Footer>
    </Card>
  );
};

export default Item;
