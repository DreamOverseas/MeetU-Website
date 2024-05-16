import React from 'react';
import { Container, Navbar, Nav, Form, Button, Row, Col } from 'react-bootstrap';

const Homepage = () => {
    return (
        <div style={{ backgroundImage: 'url(homepage_bg.png)', backgroundSize: 'cover', height: '100vh', color: 'white' }}>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">MeetU</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#events">Events</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                            <Nav.Link href="#membership">Membership</Nav.Link>
                            <Nav.Link href="#login" className="btn btn-primary">Log in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="d-flex flex-column align-items-end justify-content-center" style={{ height: '80%' }}>
                <Form className="p-4 rounded" style={{ maxWidth: '400px', width: '100%', background: 'rgba(255, 255, 255, 0.3)'}}>
                    <Form.Group controlId="formName">
                        <Form.Label>What's your name?</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formBirthday">
                        <Form.Label>Your Birthday?</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                        <Form.Label>Your Phone Number?</Form.Label>
                        <Form.Control type="text" placeholder="Enter your phone number" />
                    </Form.Group>

                    <Form.Group controlId="formGender">
                        <Form.Label>Gender</Form.Label>
                        <div>
                            <Form.Check
                                inline
                                type="radio"
                                label="Male"
                                name="gender"
                                id="male"
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Female"
                                name="gender"
                                id="female"
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Other"
                                name="gender"
                                id="other"
                            />
                        </div>
                    </Form.Group>

                    <Button variant="success" type="submit" block>
                        Register!
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Homepage;
