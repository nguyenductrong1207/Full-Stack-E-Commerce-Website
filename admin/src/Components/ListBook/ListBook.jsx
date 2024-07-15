import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import config from "../../config";

const ListBook = () => {
  const url = config.url;
  const [allBooks, setAllBooks] = useState([]);
  const navigate = useNavigate();

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

  const addBook = () => {
    navigate("/addBook");
  };

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

  const updateBook = (id) => {
    navigate(`/updateBook/${id}`);
  };

  return (
    <div className="bgColor px-3 py-3">
      <div className="mb-3 btnBlock">
        <h3 className="">List Book</h3>
        <Button variant="primary" onClick={() => addBook()} className="btnAdd">
          Add New
        </Button>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th style={{}} className="text-center">#</th>
            <th style={{width: 350}}>Name</th>
            <th style={{}} className="text-center">Image</th>
            <th style={{}} className="text-center">Category</th>
            <th style={{}} className="text-center">Author</th>
            <th style={{}} className="text-center">Price</th>
            <th style={{}} className="text-center">Quantity</th>
            <th style={{width: 150}} className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book, i) => {
            return (
              <tr key={book.id}>
                <td className="text-center">{i + 1}</td>
                <td>{book.name}</td>
                <td className="text-center">
                  <Image src={book.image} className="img" />
                </td>
                <td className="text-center">{book.category}</td>
                <td className="text-center">{book.author}</td>
                <td className="text-center">$ {book.salePrice}</td>
                <td className="text-center">{book.quantity}</td>
                <td className="text-center">
                  <Button
                    variant="danger"
                    onClick={() => deleteBook(book.id)}
                    className="mx-2"
                  >
                    X
                  </Button>
                  <Button variant="success" onClick={() => updateBook(book.id)}>
                    Details
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListBook;
