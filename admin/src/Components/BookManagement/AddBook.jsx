import React, { useState, useEffect } from "react";
import "./Style.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import config from "../../config";
import { useNavigate, useParams } from "react-router-dom";

const AddBook = () => {
  const url = config.url;
  const [image, setImage] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

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

  const fetchBookById = async (id) => {
    await fetch(url + `/getBookById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBookDetail(data.book);
      });
  };

  useEffect(() => {
    if (id) {
      console.log("id = " + id);
      fetchBookById(id);
    }
  }, [id]);

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandle = (e) => {
    setBookDetail({ ...bookDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    let formData = new FormData();

    if (image) {
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
          if (data.success) {
            bookDetail.image = data.imageURL;
          } else {
            alert("Failed To Upload Image");
          }
        });
    }

    // Update or Add Book Based On Whether ID Is Present
    const apiEndpoint = id ? `/updateBook/${id}` : "/addBook";
    const method = id ? "PUT" : "POST";

    await fetch(url + apiEndpoint, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          id ? alert("Book Updated") : alert("Book Added");
          id
            ? console.log("Updated Successfully")
            : console.log("Add Successfully");
          console.log(bookDetail);

          navigate("/listBook");
        } else {
          id ? alert("Book Updated Failed") : alert("Book Added Failed");
        }
      });
  };

  return (
    <div className="bgColor px-3 py-3">
      <h3>{id ? "Book Details" : "Add New Book"}</h3>
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
                src={image ? URL.createObjectURL(image) : bookDetail.image}
                className="img"
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

        <Button variant="primary" className="mt-3" onClick={handleSubmit}>
          {id ? "Update" : "Add New"}
        </Button>
      </Form>
    </div>
  );
};

export default AddBook;
