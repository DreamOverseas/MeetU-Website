// Navbar content for new needs
import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import "../css/Header.css";

function Header() {

    /* Implement get/set user login status when server is ready */

    return (
        <header>
            <Navbar expand='lg' className='navbar-custom'>
                <div className='navbar-content'>
                    <Image className="nav-logo" src="logo.png" />
                    <Navbar.Brand href='/' className='navbar-brand'>
                        MeetU
                    </Navbar.Brand>
                    <Nav.Link href='/Events'>Events</Nav.Link>
                    <Nav.Link href='/Sponsors'>Sponsors</Nav.Link>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    );
}

export default Header;
