// src/components/Header.js
import React from "react";
import { Navbar, Nav, Image, Accordion, Card } from "react-bootstrap";
import "../css/Header.css";

function Header() {
    return (
        <header>
            <Navbar expand='lg' className='navbar-custom'>
                <div className='navbar-content'>
                    <Navbar.Brand href='/'>
                        <Image
                            className='meetu-logo'
                            src='meetu_logo_512.png'
                            alt='MeetU'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto align-items-center'>
                            <Nav.Link href='/Events'>Events</Nav.Link>
                            <Accordion defaultActiveKey="" className="accordion-custom">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Membership</Accordion.Header>
                                    <Accordion.Body>
                                        <Card.Body>
                                            <div className="d-flex justify-content-around">
                                                <Card style={{ width: '18rem', margin: '0 10px' }}>
                                                    <Card.Body>
                                                        <Card.Title>Free Plan</Card.Title>
                                                        <Card.Text>
                                                            <ul>
                                                                <li>Access to basic events</li>
                                                                <li>Limited resources</li>
                                                            </ul>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                                <Card style={{ width: '18rem', margin: '0 10px', backgroundColor: '#f7d9ff' }}>
                                                    <Card.Body>
                                                        <Card.Title>Standard Plan</Card.Title>
                                                        <Card.Text>
                                                            <ul>
                                                                <li>Access to all events</li>
                                                                <li>Monthly newsletters</li>
                                                            </ul>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                                <Card style={{ width: '18rem', margin: '0 10px', backgroundColor: '#feffd9' }}>
                                                    <Card.Body>
                                                        <Card.Title>Premium Plan</Card.Title>
                                                        <Card.Text>
                                                            <ul>
                                                                <li>All benefits of Standard</li>
                                                                <li>Exclusive one-on-one sessions</li>
                                                            </ul>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    );
}

export default Header;
