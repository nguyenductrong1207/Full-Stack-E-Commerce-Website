import React from "react";
import "./Style.css";
import Card from "react-bootstrap/Card";

const Item = (props) => {
  return (
    <Card border="primary" style={{ width: "18rem" }}>
      <Card.Link href={`/book/${props.id}`}>
        <Card.Img
          variant="top"
          src={props.image}
        />
      </Card.Link>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Card.Text>$ {props.newPrice}</Card.Text>
        <Card.Text>
          <del>$ {props.oldPrice}</del>
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default Item;
