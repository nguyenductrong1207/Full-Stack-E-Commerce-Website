import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const CartItems = () => {
  const { allBooks, cartItems, removeFromCart } = useContext(ShopContext);
  console.log('All Books:', allBooks);
  console.log('Cart Items:', cartItems);
  return (
    <Container>
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
          {allBooks.map((book, i) => {
            if (cartItems[book.id] > 0) {
              return (
                <tr key={book.id}>
                  <td>{i + 1}</td>
                  <td>
                    <Image src={book.image} thumbnail />
                  </td>
                  <td>{book.name}</td>
                  <td>{book.newPrice}</td>
                  <td>
                    <Button>{cartItems[book.id]}</Button>
                  </td>
                  <td>$ {book.newPrice * cartItems[book.id]}</td>
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
    </Container>
  );
};

export default CartItems;
