// src/pages/Sponsors.js
// Event page contains a various showcase of our events, aimed for attracting viewers to attend > Link to Membership
import "../css/Sponsors.css";
import React from 'react';
import {Container, Row, Col, Card, Button, Image, ListGroup} from 'react-bootstrap';


// Later we can get these from cloud, use these examples crawled for now
const events = [
    {
        image: "https://placehold.co/300x200",
        title: "Small dog meetup to celebrate Frankie's birthday",
        host: "Small Dogs Meetup Group",
        date: "SUN, JUNE 16 - 09:00 AEST",
        attendees: "6",
        cost: "Free"
    },
    {
        image: "https://placehold.co/300x200",
        title: "The Future of Work: Navigating the Impact of Generative AI",
        host: "Responsible AI Melbourne",
        date: "MON, JUNE 17 - 17:30 AEST",
        attendees: "121",
        cost: "Free"
    },
    {
        image: "https://placehold.co/300x200",
        title: "Let's Get Together for Breakfast/Coffee and Plan/Embark On Our Next Adventure!!!",
        host: "Explore Victoria - Weekend Adventures in Regional...",
        date: "SAT, JUNE 8 - 08:00 AEST",
        attendees: "21",
        cost: "Free"
    },
    {
        image: "https://placehold.co/300x200",
        title: "Join Us for the Ultimate Culture Exchange Party in Collingwood!",
        host: "Spectrum",
        date: "SAT, JUNE 8 - 18:00 AEST",
        attendees: "93",
        cost: "Free"
    },
    {
        image: "https://placehold.co/300x200",
        title: "v28_Free-Mahi-Mahi!",
        host: "DesignOps LOL",
        date: "TUE, JUNE 18 - 18:00 AEST",
        attendees: "86",
        cost: "Free"
    },
    {
        image: "https://placehold.co/300x200",
        title: "Art Open Space",
        host: "Melbourne Art and Social Space",
        date: "SUN, JUNE 9 - 14:00 AEST",
        attendees: "6",
        cost: "Free"
    },
    {
        image: "https://placehold.co/300x200",
        title: "Join Us for the First-Ever Decision Intelligence Meetup in Australia!",
        host: "Decision Intelligence",
        date: "WED, JUNE 26 - 18:00 AEST",
        attendees: "29",
        cost: "Free"
    },
    {
        image: "https://placehold.co/300x200",
        title: "Lunch at Rocco's Burger Cafe",
        host: "Eastside Lesbian Lounge Events (ELLE) 30+",
        date: "SAT, JUNE 8 - 12:00 AEST",
        attendees: "19",
        cost: "Free"
    }
];

function EventCard({ image, title, host, date, attendees, cost }) {
    return (
        <Col md={4} className="mb-4">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Hosted by: {host}</Card.Text>
                    <Card.Text>
                        <i class="bi bi-calendar-event"></i> {date}
                    </Card.Text>
                    <Card.Text>
                        <i class="bi bi-people"></i> {attendees} going <br />
                        <i class="bi bi-ticket-perforated"></i> {cost}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default function Sponsors() {
    return (
        <div>
            <section className="banner-section">
                <Image src="../../Banner-Sponsor.jpg" fluid/>
                <h1 className = "banner-h1">Our Sponsors and Partners</h1>
            </section>
            <br />
            <Container fluid>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <ListGroup defaultActiveKey="#link1" className="index-content">
                            <ListGroup.Item action href="#link1">
                                Introdcution
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Our goal
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                                Our sponsors and partners 
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link4">
                                Content 1 
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link5">
                                Content 2 
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={8}>
                        <h4 className="my-4">
                        Our Sponsors and Partners play a crucial rule in the MeetU-friends making platform. Together we accomplish a successful tournament! 
                        </h4>
                        <Row>
                            {events.map((event, index) => (
                                <EventCard key={index} {...event} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
