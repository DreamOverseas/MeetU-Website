// src/components/Footer.js
import React, { useState } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import "../css/Footer.css";

const Footer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <footer className='meetu-footer'>
            <Container>
                <Row className="align-items-center">
                    <Col md={4}>
                        <Image src="../../logo.png" alt="MeetU" style={{ width: '150px' }} />
                    </Col>
                    { /* Place holder for now, please put real contact info later */ }
                    <Col md={4}>
                        <Button variant="primary" onClick={handleShow} className='footer-modal-button'>
                            <strong>Follow Us</strong>
                        </Button>

                        <Modal show={show}
                            onHide={handleClose}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Follow Us on WeChant for Most Updated Information!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>TODO - Put a QR code here</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Got it.
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                    <Col md={4} className='footer-contact-info'>
                        <p><i class="bi bi-telephone"></i> +1 234 567 890</p>
                        <p><i class="bi bi-mailbox"></i> contact@meetu.com</p>
                        <p><i class="bi bi-pin-map-fill"></i> 171 LaTrobe St, Melbourne</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-3">
                        <p><i class="bi bi-c-circle"></i>2024 MeetU Technology. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
