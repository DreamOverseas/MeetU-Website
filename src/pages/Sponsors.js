// src/pages/Sponsors.js
// Event page contains a various showcase of our events, aimed for attracting viewers to attend > Link to Membership
import "../css/Sponsors.css";
import React from 'react';
import {Container, Row, Col, Card, Image} from 'react-bootstrap';


// Later we can get these from cloud, use these examples crawled for now
const events = [
    {
        image: "https://placehold.co/300x200"
    },
    {
        image: "https://placehold.co/300x200"
    },
    {
        image: "https://placehold.co/300x200"
    },
    {
        image: "https://placehold.co/300x200"
    },
    {
        image: "https://placehold.co/300x200"
    },
    {
        image: "https://placehold.co/300x200"
    }
];

const videos = [
    {
        image: "https://placehold.co/1600x900",
    },
    {
        image: "https://placehold.co/1600x900",
    },
    {
        image: "https://placehold.co/1600x900",
    }
];

function EventCard({ image}) {
    return (
        <Col md={4} className="mb-4">
            <Card>
                <Card.Img variant="top" src={image} />
            </Card>
        </Col>
    );
};

function VideoCard({ image}) {
    return (
        <Col md={10} className="mb-4">
            <Card>
                <Card.Img variant="top" src={image} />
            </Card>
        </Col>
    );
};

export default function Sponsors() {
    return (
        <div>
            <section className="banner-section">
                <Image src="../../Banner-Sponsor.jpg" fluid/>
                <h1 className = "sponsor-banner-h1">Our Sponsors and Partners</h1>
            </section>
            <br />
            <Container fluid>
                <Row>
                    <Col>
                        <Container className="index-content">
                            <h2>
                                Index of Content
                            </h2>
                            <Row>
                                <div className="index-item">
                                    <h4><a href="#About">About</a></h4>
                                    <hr></hr>
                                </div>
                            </Row>
                            <Row>
                                <div className="index-item">
                                    <h4><a href="#Sponsors&partners">Sponsors & partners</a></h4>
                                    <hr></hr>
                                </div>
                            </Row>
                            <Row>
                                <div className="index-item">
                                    <h4><a href="#past-events">Past Events</a></h4>
                                    <hr></hr>
                                </div>
                            </Row>
                            <Row>
                                <div className="index-item">
                                    <h4><a href="#contact-us">Join Us</a></h4>
                                    <hr></hr>
                                </div>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={8} className="content-section">
                        <Row id="About">
                            <h2 className="my-5">
                                About
                            </h2>
                            <h4>
                                Our Sponsors and Partners play a crucial rule in the MeetU-friends making platform. Together we accomplish a successful tournament! 
                            </h4>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </Row>
                        
                        <Row id="Sponsors&partners">
                            <h2 className="my-5">
                                Sponsors & partners
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </Row>
                        <Row>
                            {events.map((event, index) => (
                                <EventCard key={index} {...event} />
                            ))}
                        </Row>
                        <Row id="past-events">
                            <h2 className="my-5">
                                Past Events
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            {videos.map((video, index) => (
                                <VideoCard key={index} {...video} />
                            ))}
                        </Row>
                        <Row>
                            {events.map((event, index) => (
                                <EventCard key={index} {...event} />
                            ))}
                        </Row>
                        <Row id="contact-us">
                            <h2 className="my-5">
                                Join Us
                            </h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
