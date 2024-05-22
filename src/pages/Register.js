// src/pages/Register.js
// Register page provide new user to create their account on some basic informations
import React, { useState } from 'react';
import "../css/Forms.css";
import { Container, Form, Button, Col, Row, Card } from 'react-bootstrap';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gender: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // TODO: implement submit session when server is on
        console.log('Form Data Submitted:', formData);
    };

    return (
        <Container className="mt-5 align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <Row>
                <Col md={6} className="mx-auto">
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center"><h2>Register to Start Ur Journey</h2></Card.Title>
                            <br />
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} controlId="formFirstName">
                                    <Form.Label column sm="3">First Name</Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="What's your first name..."
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <br />
                                <Form.Group as={Row} controlId="formLastName">
                                    <Form.Label column sm="3">Last Name</Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="And your last name?"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <br />
                                <Form.Group as={Row} controlId="formPhoneNumber">
                                    <Form.Label column sm="3">Phone Number</Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="tel"
                                            placeholder="Phone number, please..."
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <br />
                                <fieldset>
                                    <Form.Group as={Row}>
                                        <Form.Label as="legend" column sm={3}>
                                            Gender
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Check
                                                type="radio"
                                                label="Male"
                                                name="gender"
                                                id="genderMale"
                                                value="Male"
                                                checked={formData.gender === 'Male'}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Female"
                                                name="gender"
                                                id="genderFemale"
                                                value="Female"
                                                checked={formData.gender === 'Female'}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Other"
                                                name="gender"
                                                id="genderOther"
                                                value="Other"
                                                checked={formData.gender === 'Other'}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                                <br />
                                <Form.Group as={Row} controlId="formPassword">
                                    <Form.Label column sm="3">Password</Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="password"
                                            placeholder="Please remember it well"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <br />
                                <Form.Group as={Row} controlId="formConfirmPassword">
                                    <Form.Label column sm="3">Confirm Password</Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="password"
                                            placeholder="Check it out..."
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                
                                <Form.Group as={Col} controlId="formBasicCheckbox">
                                    <Col sm={{offset: 0 }}>
                                        <Form.Check
                                            type="checkbox"
                                            label="I agree to the terms and conditions"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <div className="form-button-container">
                                <Button variant="primary" type="submit" block>
                                    Register
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
