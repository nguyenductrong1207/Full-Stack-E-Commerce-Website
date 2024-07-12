import React from "react";
import "./Style.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import config from "../../config";

const AddBook = () => {
  const url = config.url;
  const [image, setImage] = useState(false);
  const [bookDetail, setBookDetail] = useState({
    name: "",
    description: "",
    price: "",
    salePrice: "",
    quantity: "",
    language: "",
    publicationDate: "",
    numPages: "",
    image: "",
    author: "",
    category: "",
    publisher: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandle = (e) => {
    setBookDetail({ ...bookDetail, [e.target.name]: e.target.value });
  };

  const addBook = async () => {
    console.log(bookDetail);
    let responseData;
    let book = bookDetail;

    let formData = new FormData();
    formData.append("book", image);

    await fetch(url + "/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      book.image = responseData.imageURL;
      console.log(book);
      await fetch(url + "/addBook", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then((res) => res.json())
        .then((data) => {
          data.success ? alert("Book Added") : alert("Failed");
        });
    }
  };

  return (
    <div className="bgColor px-3 py-3">
      <h3>Add New Book</h3>
      <Form>
        <Row className="mb-3">
          <Col md="6">
            <Form.Group controlId="title">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                name="name"
                value={bookDetail.name}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
          <Col md="3">
            <Form.Group controlId="category">
              <Form.Label>Book Category</Form.Label>
              <Form.Select
                name="category"
                defaultValue="Education"
                value={bookDetail.category}
                onChange={changeHandle}
              >
                <option>Choose One</option>
                <option>Education</option>
                <option>Comic</option>
                <option>Technology</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md="3">
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Select
                name="author"
                defaultValue="Author 1"
                value={bookDetail.author}
                onChange={changeHandle}
              >
                <option>Choose One</option>
                <option>Author 1</option>
                <option>Author 2</option>
                <option>Author 3</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md="">
            {" "}
            <Form.Group controlId="salePrice">
              <Form.Label>Sale Price</Form.Label>
              <Form.Control
                name="salePrice"
                value={bookDetail.salePrice}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
          <Col md="">
            {" "}
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                value={bookDetail.price}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
          <Col md="">
            {" "}
            <Form.Group controlId="newPrice">
              <Form.Label>Book Quantity</Form.Label>
              <Form.Control
                name="quantity"
                value={bookDetail.quantity}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
          <Col md="">
            {" "}
            <Form.Group controlId="numPages">
              <Form.Label>Number of Pages</Form.Label>
              <Form.Control
                name="numPages"
                value={bookDetail.numPages}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="">
            <Form.Group controlId="publisher">
              <Form.Label>Publisher</Form.Label>
              <Form.Select
                name="publisher"
                defaultValue="Publisher 1"
                value={bookDetail.publisher}
                onChange={changeHandle}
              >
                <option>Choose One</option>
                <option>Publisher 1</option>
                <option>Publisher 2</option>
                <option>Publisher 3</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="">
            {" "}
            <Form.Group controlId="publicationDate">
              <Form.Label>Publication Date</Form.Label>
              <Form.Control
                name="publicationDate"
                value={bookDetail.publicationDate}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
          <Col md="">
            {" "}
            <Form.Group controlId="language">
              <Form.Label>Language</Form.Label>
              <Form.Control
                name="language"
                value={bookDetail.language}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            {" "}
            <Form.Group controlId="image">
              <Form.Label>Book Image</Form.Label>
              <Form.Control type="file" onChange={imageHandler} name="image" />
              <Image
                src={image ? URL.createObjectURL(image) : "Image"}
                className="image"
              />
            </Form.Group>
          </Col>
          <Col md="8">
            <Form.Group controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={bookDetail.description}
                onChange={changeHandle}
                style={{ height: "150px" }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button
          variant="primary"
          className="mt-3"
          onClick={() => {
            addBook();
          }}
        >
          Add New
        </Button>
      </Form>
    </div>
  );
};

export default AddBook;
