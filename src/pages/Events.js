// src/pages/Events.js
// Event page contains a various showcase of our events, aimed for attracting viewers to attend > Link to Membership
import { React, useState } from 'react';
import { Carousel, Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const Events = () => {
    // UseSattes that handles modal open/close
    const [mapModal, setMapModal] = useState(false);
    const closeMapModal = () => setMapModal(false);
    const showMapModal = () => setMapModal(true);

    // handles the change off position text
    const [position, setPosition] = useState("Melbourne, VIC");
    const positionChange = (text) => {
        setPosition(text);
        closeMapModal();
    };

    function EventCard({ image, title, host, date, attendees, cost }) {
        return (
            <Col md={4} className="mb-4">
                <Card>
                    <Card.Img variant="top" src={image} fluid/>
                    <Card.Body>
                        <Card.Title 
                            style={{
                                whiteSpace: 'nowrap',
                                height: '30px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontSize: '18px'
                                }}
                            title={title}>
                            {title}
                        </Card.Title>
                        <Card.Text style={{
                                whiteSpace: 'nowrap',
                                height: '20px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontSize: '14px'
                                }}
                            title={host}>
                            Hosted by: {host}
                        </Card.Text>
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
    }

    // Later we can get these from cloud, use these examples crawled for now
    const events = [
        {
            image: "../event-demo.jpg",
            title: "Small dog meetup to celebrate Frankie's birthday",
            host: "Small Dogs Meetup Group",
            date: "SUN, JUNE 16 - 09:00 AEST",
            attendees: "6",
            cost: "Free"
        },
        {
            image: "../event-demo.jpg",
            title: "The Future of Work: Navigating the Impact of Generative AI",
            host: "Responsible AI Melbourne",
            date: "MON, JUNE 17 - 17:30 AEST",
            attendees: "121",
            cost: "20"
        },
        {
            image: "../event-demo.jpg",
            title: "Let's Get Together for Breakfast/Coffee and Plan/Embark On Our Next Adventure!!!",
            host: "Explore Victoria - Weekend Adventures in Regional...",
            date: "SAT, JUNE 8 - 08:00 AEST",
            attendees: "21",
            cost: "Free"
        },
        {
            image: "../event-demo.jpg",
            title: "Join Us for the Ultimate Culture Exchange Party in Collingwood!",
            host: "Spectrum",
            date: "SAT, JUNE 8 - 18:00 AEST",
            attendees: "93",
            cost: "105"
        },
        {
            image: "../event-demo.jpg",
            title: "v28_Free-Mahi-Mahi!",
            host: "DesignOps LOL",
            date: "TUE, JUNE 18 - 18:00 AEST",
            attendees: "86",
            cost: "25"
        },
        {
            image: "../event-demo.jpg",
            title: "Art Open Space",
            host: "Melbourne Art and Social Space",
            date: "SUN, JUNE 9 - 14:00 AEST",
            attendees: "6",
            cost: "52"
        },
        {
            image: "../event-demo.jpg",
            title: "Join Us for the First-Ever Decision Intelligence Meetup in Australia!",
            host: "Decision Intelligence",
            date: "WED, JUNE 26 - 18:00 AEST",
            attendees: "29",
            cost: "Free"
        },
        {
            image: "../event-demo.jpg",
            title: "Lunch at Rocco's Burger Cafe",
            host: "Eastside Lesbian Lounge Events (ELLE) 30+",
            date: "SAT, JUNE 8 - 12:00 AEST",
            attendees: "19",
            cost: "Free"
        }
    ];

    return (
        <Container className="event-container">
            <Row className="justify-content-md-center">
                <Col md={12}>
                    <h1>Our Event Showcases!</h1>
                    <p>Our teams are here waiting for your attandance!</p>
                    <Carousel className="event-carosel">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../../showcases/hotpot.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Premium Food</h3>
                                <p>Enjoy your food within the beautiful landscape.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../../showcases/beach.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Peaceful Beach</h3>
                                <p>Have a nice walk alone our 10km beach.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../../showcases/wetlands.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Birds Gazing</h3>
                                <p>Discover the various species in the wetlands.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <br />
            <h2 className="my-4">
                Events Near Me
                <Button variant="outline-primary" className="ml-2 mx-4" onClick={showMapModal} >
                    { position } <i class="bi bi-crosshair2"></i>
                </Button>
            </h2>
            <Modal show={mapModal} onHide={closeMapModal} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Choose you location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Select the position you're in:</p>
                    <Button variant="info" onClick={() => positionChange("Melbourne, VIC")}>Melbourne, VIC</Button>{' '}
                    <Button variant="info" onClick={() => positionChange("Sydney, NSW")}>Sydney, NSW</Button>{' '}
                    <Button variant="info" onClick={() => positionChange("Brisbaine, QLD")}>Brisbaine, QLD</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeMapModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row>
                {events.map((event, index) => (
                    <EventCard key={index} {...event} />
                ))}
            </Row>
        </Container>
    );
};

export default Events;
