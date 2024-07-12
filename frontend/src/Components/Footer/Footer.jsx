import React from "react";
import "./Style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoWhite from "../Assets/images/logoWhite.png";
import Image from "react-bootstrap/Image";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaChevronRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bgColor">
      <Container className="footer">
        <Row>
          <Col md="3">
            <Image
              src={logoWhite}
              className="logo d-inline-block align-top mb-5"
            />
            <p className="mb-3">Bookland is a Book Store Ecommerce Website</p>
            <div className="social-icons">
              <a href="">
                <FaFacebookF className="direction-icon" />
              </a>
              <a href="">
                <FaYoutube className="direction-icon" />
              </a>
              <a href="">
                <FaLinkedinIn className="direction-icon" />
              </a>
              <a href="">
                <FaInstagram className="direction-icon" />
              </a>
            </div>
          </Col>
          <Col md="2">
            <h4>Our Links</h4>
            <ul>
              <li>
                <a href="">
                  <FaChevronRight className="direction-icon" /> About Us
                </a>
              </li>
              <li>
                <a href="">
                  <FaChevronRight className="direction-icon" /> Contact Us
                </a>
              </li>
              <li>
                <a href="">
                  <FaChevronRight className="direction-icon" /> Pricing Table
                </a>
              </li>
              <li>
                <a href="">
                  <FaChevronRight className="direction-icon" /> FAQ
                </a>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h4>Bookland</h4>
            <ul>
              <li>
                <a href="">
                  <FaChevronRight className="direction-icon" /> Bookland
                </a>
              </li>
              <li>
                <a href="">
                  <FaChevronRight className="direction-icon" /> Services
                </a>
              </li>
              <li>
                <a href="">
                  <FaChevronRight className="direction-icon" /> Books List
                </a>
              </li>
              <li>
                <a href="">
                  <FaChevronRight className="direction-icon" /> News Details
                </a>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="">
                  <FaChevronRight className="direction-icon" /> Download
                </a>
              </li>
              <li>
                <a href="">
                  <FaChevronRight className="direction-icon" /> Shop Cart
                </a>
              </li>
              <li>
                <a href="">
                  <FaChevronRight className="direction-icon" /> Login
                </a>
              </li>
              <li>
                <a href="">
                  <FaChevronRight className="direction-icon" /> Partner
                </a>
              </li>
            </ul>
          </Col>
          <Col md="3">
            <h4>Get in Touch With Us</h4>
            <ul className="contact-info">
              <li>
                Nam Kỳ Khởi Nghĩa, Định Hoà,
                <br /> Thủ Dầu Một, Bình Dương
              </li>
              <li>+123 345123 556</li>
              <li>support.bookland@gmail.com</li>
              <li>info.bookland@gmail.com</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="footer-bottom mt-3 pt-4">
            Bookland Store - © 2024 All Rights Reserved
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
