import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const CartItems = () => {
  const { getTotalCartAmount, allBooks, cartItems, removeFromCart } =
    useContext(ShopContext);
  let i = 0;
  console.log("All Books:", allBooks);
  console.log("Cart Items:", cartItems);
  return (
    <Container>
      <h2>Shopping Cart</h2>
      <Table responsive="md">
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book) => {
            if (cartItems[book.id] > 0) {
              return (
                <tr key={book.id}>
                  <td>{++i}</td>
                  <td>
                    <Image src={book.image} className="mb-3 img" />
                  </td>
                  <td>{book.name}</td>
                  <td>$ {book.salePrice}</td>
                  <td>
                    <Button>{cartItems[book.id]}</Button>
                  </td>
                  <td>$ {book.salePrice * cartItems[book.id]}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(book.id)}
                    >
                      X
                    </Button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </Table>
      <Row className="mb-4 mt-4">
        <Col md={6}>
          <h2>Cart Total</h2>

          <Row>
            <Col md={6}>
              <p>Subtotal</p>
              <p>Shipping Fee</p>
              <p>Total</p>
              <Button variant="primary">Check Out</Button>
            </Col>
            <Col md={6}>
              <p>$ {getTotalCartAmount()}</p>
              <p>Free</p>
              <p>$ {getTotalCartAmount()}</p>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <p>If you have a promo code, Enter it here</p>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Promo Code"
              aria-label="Promo Code"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItems;
