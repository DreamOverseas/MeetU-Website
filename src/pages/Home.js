// src/pages/Home.js
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/Home.css";

const Home = () => {
    return (
        <div>
            <div className='home-page'>
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap'
                />
                <Container className='home-container'>
                    <h1 style={{ fontSize: '128px' }}>MeetU</h1>
                    <br /><br />
                    <p style={{ fontSize: '48px' }}>Meet your mate from here.</p>
                    <br /><br /><br /><br /><br /><br /><br />
                    <div className='download-buttons'>
                        <a href='/' tabIndex='0'>
                            <img
                                class='bn46'
                                src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
                                alt='bn45'
                            />
                        </a>
                        <a href='/' tabIndex='0'>
                            <img
                                class='bn45'
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png'
                                alt='bn45'
                            />
                        </a>
                    </div>
                </Container>
            </div>
            {/* About Us Section */}
            <Container fluid className='about-us-container'>
                <h1>About Us</h1> <br/>
                <Row className="align-items-center justify-content-center" >
                    <Col md={3}>
                        <Image src="earth.png" alt="Visual Representation" style={{ maxWidth: '75%' }} />
                    </Col>
                    <Col md={9}>
                        <p style={{ fontSize: '24px' }}>
                            MeetU redefines social connections by addressing current market pain points such as inefficiency, low quality, ineffectiveness, lack of precision, and interpersonal risks. Our platform is designed to enhance the quality of interactions, ensuring that every connection is meaningful and risk-free, optimizing your social networking experience.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
