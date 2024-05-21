// src/components/Header.js
import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "../css/Header.css";

function Header() {
  return (
    <header>
      <Navbar expand='lg' className='navbar-custom'>
        <div className='navbar-content'>
          <Navbar.Brand href='#home'>
            <Image
              className='meetu-logo'
              src='meetu_logo_512x385.png'
              alt='MeetU'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='Events'>Events</Nav.Link>
              <Nav.Link href='Membership'>Membership</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
