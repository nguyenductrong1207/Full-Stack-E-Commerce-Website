import React, { useState, useEffect } from "react";
import "./Style.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import config from "../../config";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const url = config.url;
  const [image, setImage] = useState(false);
  const navigate = useNavigate();
  const { email } = useParams();

  const [userDetail, setUserDetail] = useState({
    name: "",
    status: "",
    price: "",
    email: "",
    password: "",
    image: "",
    job: "",
    dob: "",
    phone: "",
    address: "",
  });

  const fetchUserByEmail = async (email) => {
    await fetch(url + `/getUserByEmail/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserDetail(data.user);
      });
  };

  useEffect(() => {
    if (email) {
      console.log("email = " + email);
      fetchUserByEmail(email);
    }
  }, [email]);

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandle = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
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
            userDetail.image = data.imageURL;
          } else {
            alert("Failed To Upload Image");
          }
        });
    }

    // Update User
    await fetch(url + `/updateUser/${email}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("User Updated");
          console.log("Updated Successfully");
          console.log(userDetail);

          navigate("/listUser");
        } else {
          alert("User Updated Failed");
        }
      });
  };

  return (
    <div className="bgColor px-3 py-3">
      <h3>User Details</h3>
      <Form>
        <Row className="mb-3">
          <Col md="6">
            <Form.Group controlId="name">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                name="name"
                value={userDetail.name}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group controlId="status">
              <Form.Label>Book Category</Form.Label>
              <Form.Select
                name="status"
                defaultValue="Able"
                value={userDetail.status}
                onChange={changeHandle}
              >
                <option>Choose One</option>
                <option>Able</option>
                <option>Disable</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md="">
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={userDetail.email} />
            </Form.Group>
          </Col>
          <Col md="">
            <Form.Group controlId="job">
              <Form.Label>Job</Form.Label>
              <Form.Control
                name="job"
                value={userDetail.job}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
          <Col md="">
            {" "}
            <Form.Group controlId="dob">
              <Form.Label>Day Of Birth</Form.Label>
              <Form.Control
                name="dob"
                value={userDetail.dob}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
          <Col md="">
            {" "}
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                value={userDetail.phone}
                onChange={changeHandle}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="">
            {" "}
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                value={userDetail.address}
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
                src={image ? URL.createObjectURL(image) : userDetail.image}
                className="img"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" className="mt-3" onClick={handleUpdate}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UserDetail;
