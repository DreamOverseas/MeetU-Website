// src/pages/Sponsors.js
// Event page contains a various showcase of our events, aimed for attracting viewers to attend > Link to Membership
import "../css/About.css";
import React from 'react';
import {Container, Row, Col, Card, Image} from 'react-bootstrap';


// Later we can get these from cloud, use these examples crawled for now
const members = [
    {
        image: "https://placehold.co/300x200",
        name: "Alice Swtcher",
        title: "Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "https://placehold.co/300x200",
        name: "Alice Swtcher",
        title: "Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "https://placehold.co/300x200",
        name: "Alice Swtcher",
        title: "Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "https://placehold.co/300x200",
        name: "Alice Swtcher",
        title: "Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "https://placehold.co/300x200",
        name: "Alice Swtcher",
        title: "Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "https://placehold.co/300x200",
        name: "Alice Swtcher",
        title: "Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];


function MemberCard({ image, name, title, description }) {
    return (
        <Col md={4} className="mb-4">
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{title}</Card.Text>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    );
};


export default function About() {
    return (
        <div>
            <Container className="about-us-banner-section">
                <Row>
                    <Col>
                        <Image src="https://placehold.co/550x600" fluid className="about-banner-image"/>
                    </Col>
                    <Col>
                        <p className="about-banner-text-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p> 
                    </Col>
                </Row>
                <h1 className = "about-banner-h1">ABOUT US</h1>
            </Container>
            <br />
            <br />
            <hr></hr>
            <Container className="our-aim-section">
                <Row>
                    <Col>
                        <p className="about-banner-text-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p> 
                    </Col>
                    <Col>
                        <Image src="https://placehold.co/550x600" fluid className="about-banner-image"/>
                    </Col>
                </Row>
                <h1 className = "about-banner-h1">OUR AIMS</h1>
            </Container>
            <br />
            <br />
            <hr></hr>
            <Container>
                <Row className="who-are-we-h1">
                    <h1>
                        WHO ARE WE
                    </h1>
                </Row>
                <Row>
                    {members.map((member, index) => (
                        <MemberCard key={index} {...member} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};
