// src/pages/Home.js
import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import "../css/Home.css";

const Home = () => {
  return (
    <div className='home-page'>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap'
      />
      <Container className='home-container'>
        <Row className='align-items-center'>
          <Col md={12} className='text-center'>
            <h1 className='slogan'>MeetU</h1>
            <p className='subtitle'>Meet yourself from here.</p>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col md={6} className='text-center'>
            <Image
              src='image.png'
              alt='Earth with location pins'
              fluid
              className='main-image'
            />
          </Col>
          <Col md={6} className='text-center'>
            <Form className='form-container'>
              <Form.Group controlId='formFirstName'>
                <Form.Label>First Name *</Form.Label>
                <Form.Control type='text' placeholder='Enter your first name' />
              </Form.Group>
              <Form.Group controlId='formLastName'>
                <Form.Label>Last Name *</Form.Label>
                <Form.Control type='text' placeholder='Enter your last name' />
              </Form.Group>
              <Form.Group controlId='formEmail'>
                <Form.Label>Email *</Form.Label>
                <Form.Control type='email' placeholder='Enter your email' />
              </Form.Group>
              <Form.Group controlId='formIndustry'>
                <Form.Label>Industry</Form.Label>
                <Form.Control as='select'>
                  <option>Choose...</option>
                  <option>Technology</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                </Form.Control>
              </Form.Group>
              <Button variant='success' type='submit' block>
                CLAIM NOW
              </Button>
            </Form>
            <div className='download-buttons'>
              <a href='/' tabIndex='0'>
                <img
                  class='bn46'
                  src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
                  alt='bn45'
                />
              </a>
              <a href='/' tabIndex='0'>
                <img
                  class='bn45'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png'
                  alt='bn45'
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
