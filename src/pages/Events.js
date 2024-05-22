// src/pages/Events.js
// Event page contains a various showcase of our events, aimed for attracting viewers to attend > Link to Membership
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const Events = () => {
    return (
        <Container className="event-container">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <h1>Our Event Showcases!</h1>
                    <p>Our teams are here waiting for your attandance!</p>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="showcases/hotpot.jpg"
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
                                src="showcases/beach.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>The Beach</h3>
                                <p>Have a nice walk alone our 10km beach.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="showcases/wetlands.jpg"
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
        </Container>
    );
};

export default Events;
