import React, { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import "../css/Header.css";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* Implement get/set user login status when server is ready */

  return (
    <header>
      <Navbar expand='lg' className='navbar-custom'>
        <div className='navbar-content'>
          <Navbar.Brand href='/' className='navbar-brand'>
            MeetU
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/events'>Events</Nav.Link>
              <Nav.Link href='/membership'>Membership</Nav.Link>
            </Nav>
            {isLoggedIn ? (
              <Nav.Link href='/profile'>Profile</Nav.Link>
            ) : (
              <Button variant='outline-dark' href='/login'>
                Login
              </Button>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
