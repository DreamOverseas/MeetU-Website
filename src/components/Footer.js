// src/components/Footer.js
import React from "react";
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className='footer-custom'>
            <div className='footer-links'>
                <a href='#'>About</a>
                <a href='#'>Blog</a>
                <a href='#'>Help Center</a>
                <a href='#'>Terms of Service</a>
                <a href='#'>Privacy Policy</a>
            </div>
            <p className='footer-text'><i class="bi bi-c-circle" /> 2023 Friendship</p>
        </footer>
    );
};

// Please Edit for more information. Like address, email, and ph num...

export default Footer;
