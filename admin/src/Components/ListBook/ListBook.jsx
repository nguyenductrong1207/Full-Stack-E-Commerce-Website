import React from "react";
import "./Style.css";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const ListBook = () => {
  // const url = "http://localhost:4000";

  // backend server url
  const url = "https://backend-e-commerce-website-using-mern.onrender.com";

  const [allBooks, setAllBooks] = useState([]);

  const fetchInfo = async () => {
    await fetch(url + "/getAllBooks")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const deleteBook = async (id) => {
    await fetch(url + "/deleteBook", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>New Price</th>
          <th>Old Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {allBooks.map((book, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <Image src={book.image} thumbnail />
              </td>
              <td>{book.name}</td>
              <td>$ {book.oldPrice}</td>
              <td>$ {book.newPrice}</td>
              <td>{book.category}</td>
              <td>
                <Button variant="danger" onClick={() => deleteBook(book.id)}>
                  X
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ListBook;
