import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "../css/Home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("people");

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className='home-page'>
        <Container>
          <Row className='align-items-center'>
            <Col md={6}>
              <h1 style={{ fontSize: "48px" }}>Hi there,</h1>
              <p style={{ fontSize: "24px" }}>
                We're excited to help you make new connections
              </p>
              <form className='search-form'>
                <input
                  type='text'
                  className='search-input'
                  placeholder='Search for friends or dates'
                />
                <Button type='submit' className='search-button'>
                  Search
                </Button>
              </form>
            </Col>
            <Col md={6}>
              <Image
                src='image.png'
                alt='Visual Representation'
                className='hero-image'
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* About Section */}
      <Container className='about-section'>
        <Row className='justify-content-center'>
          <Col md={8}>
            <h2>
              What's the difference between finding a friend and finding a date?
            </h2>
            <p>
              Meeting new people can be exciting, but it's important to remember
              that not everyone is looking for the same thing. That's why we've
              created two ways to discover new people on Meet: finding friends
              and finding dates. Here's what you need to know.
            </p>
            <Button variant='primary'>Learn more</Button>
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className='features-section'>
        <Row className='justify-content-center'>
          <Col md={5} className='feature-box'>
            <h3>Find a friend</h3>
            <p>
              We're here to help you find new friends. You can use Meet to find
              someone who shares your interests or to meet new people.
            </p>
          </Col>
          <Col md={5} className='feature-box'>
            <h3>Find a date</h3>
            <p>
              We're here to help you find a date. You can use Meet to find
              people who are looking for a relationship.
            </p>
          </Col>
        </Row>
      </Container>

      {/* New on Meet Section */}
      <Container className='new-on-meet-section'>
        <h2>New on Meet</h2>
        <div className='tabs'>
          <button
            className={`tab-button ${activeTab === "people" ? "active" : ""}`}
            onClick={() => handleTabClick("people")}
          >
            People
          </button>
          <button
            className={`tab-button ${activeTab === "groups" ? "active" : ""}`}
            onClick={() => handleTabClick("groups")}
          >
            Groups
          </button>
          <button
            className={`tab-button ${activeTab === "events" ? "active" : ""}`}
            onClick={() => handleTabClick("events")}
          >
            Events
          </button>
        </div>
        {activeTab === "people" && (
          <Row className='people-row'>
            <Col md={2} className='person'>
              <Image src='person1.jpg' alt='Rachael' roundedCircle />
              <p>
                Rachael
                <br />
                24, San Francisco
                <br />
                Friends
              </p>
            </Col>
            <Col md={2} className='person'>
              <Image src='person2.jpg' alt='Hannah' roundedCircle />
              <p>
                Hannah
                <br />
                23, Los Angeles
                <br />
                Friends
              </p>
            </Col>
            <Col md={2} className='person'>
              <Image src='person3.jpg' alt='Kate' roundedCircle />
              <p>
                Kate
                <br />
                26, New York
                <br />
                Friends
              </p>
            </Col>
            <Col md={2} className='person'>
              <Image src='person4.jpg' alt='Linda' roundedCircle />
              <p>
                Linda
                <br />
                28, Chicago
                <br />
                Friends
              </p>
            </Col>
            <Col md={2} className='person'>
              <Image src='person5.jpg' alt='Eva' roundedCircle />
              <p>
                Eva
                <br />
                22, Miami
                <br />
                Friends
              </p>
            </Col>
          </Row>
        )}
        {activeTab === "groups" && (
          <Row className='people-row'>
            <Col md={12}>
              <p>No groups available at the moment.</p>
            </Col>
          </Row>
        )}
        {activeTab === "events" && (
          <Row className='people-row'>
            <Col md={12}>
              <p>No events available at the moment.</p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Home;
