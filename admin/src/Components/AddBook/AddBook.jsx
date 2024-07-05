import React from "react";
import "./Style.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useState } from "react";

const AddBook = () => {
  const [image, setImage] = useState(false);
  const [bookDetail, setBookDetail] = useState({
    name: "",
    image: "",
    category: "",
    oldPrice: "",
    newPrice: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandle = (e) => {
    setBookDetail({ ...bookDetail, [e.target.name]: e.target.value });
  };

  const addBook = async () => {
    console.log(bookDetail);

  };

  return (
    <div>
      <h3>Add a New Book</h3>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="title">
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              name="name"
              placeholder="Book Title"
              value={bookDetail.name}
              onChange={changeHandle}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="price">
            <Form.Label>Book Price</Form.Label>
            <Form.Control
              name="oldPrice"
              placeholder="Book Price"
              value={bookDetail.oldPrice}
              onChange={changeHandle}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={imageHandler} name="image" />
            <Image
              src={image ? URL.createObjectURL(image) : "Image"}
              className="image"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="category">
            <Form.Label>Book Category</Form.Label>
            <Form.Select
              name="category"
              defaultValue="Choose Category"
              value={bookDetail.category}
              onChange={changeHandle}
            >
              <option>Education</option>
              <option>Comic</option>
              <option>Technology</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="newPrice">
            <Form.Label>New Price</Form.Label>
            <Form.Control
              name="newPrice"
              placeholder="New Price"
              value={bookDetail.newPrice}
              onChange={changeHandle}
            />
          </Form.Group>
        </Row>

        <Button
          variant="primary"
          onClick={() => {
            addBook();
          }}
        >
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddBook;
