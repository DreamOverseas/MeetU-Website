// src/components/Footer.js
import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className='footer-custom'>
      <div className='footer-content'>
        <Row className='align-items-center'>
          {/* Logo on the left */}
          <Col xs={6} md={4} className='footer-logo-container'>
            <Image
              src='meetu_logo_512x385.png'
              alt='Logo'
              fluid
              className='footer-logo'
            />
          </Col>

          {/* Contact info on the right */}
          <Col xs={6} md={8} className='text-md-right'>
            <p className='mb-0'>
              <strong>Contact Us:</strong>
            </p>
            <p className='mb-0'>Email: example@email.com</p>
            <p className='mb-0'>Phone: +1234567890</p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
