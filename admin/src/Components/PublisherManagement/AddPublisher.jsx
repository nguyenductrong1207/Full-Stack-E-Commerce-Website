import React, { useState, useEffect } from "react";
import "./Style.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import config from "../../config";
import { useNavigate, useParams } from "react-router-dom";

const AddPublisher = () => {
  const url = config.url;
  const navigate = useNavigate();
  const { id } = useParams();

  const [publisherDetail, setPublisherDetail] = useState({
    name: "",
    country: "",
    address: "",
    email: "",
  });

  const fetchPublisherById = async (id) => {
    await fetch(url + `/getPublisherById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPublisherDetail(data.publisher);
      });
  };

  useEffect(() => {
    if (id) {
      console.log("id = " + id);
      fetchPublisherById(id);
    }
  }, [id]);

  const changeHandle = (e) => {
    setPublisherDetail({ ...publisherDetail, [e.target.name]: e.target.value });
  };

  // Update or Add Publisher Based On Whether ID Is Present
  const handleSubmit = async () => {
    const apiEndpoint = id ? `/updatePublisher/${id}` : "/addPublisher";
    const method = id ? "PUT" : "POST";

    await fetch(url + apiEndpoint, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(publisherDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          id ? alert("Publisher Updated") : alert("Publisher Added");
          id
            ? console.log("Updated Successfully")
            : console.log("Add Successfully");
          console.log(publisherDetail);

          navigate("/listPublisher");
        } else {
          id
            ? alert("Publisher Updated Failed")
            : alert("Publisher Added Failed");
        }
      });
  };

  return (
    <div className="bgColor px-3 py-3">
      <h3>{id ? "Publisher Details" : "Add New Publisher"}</h3>
      <Form>
        <Row className="mb-3">
          <Col md="6">
            <Form.Group controlId="title">
              <Form.Label>Publisher Name</Form.Label>
              <Form.Control
                name="name"
                value={publisherDetail.name}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group controlId="title">
              <Form.Label>Country</Form.Label>
              <Form.Control
                name="country"
                value={publisherDetail.country}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md="6">
            <Form.Group controlId="title">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                value={publisherDetail.address}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group controlId="title">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                value={publisherDetail.email}
                onChange={changeHandle}
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

export default AddPublisher;
