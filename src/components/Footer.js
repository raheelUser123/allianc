// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import Footerlogo from '../images/main-logo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="py-5">
      <Container>
        {/* Logo Section */}
        <div className="text-center mb-4">
          <img src={Footerlogo} alt="Footer Logo" className="img-fluid" />
        </div>

        {/* Links Section */}
        <Row className="d-flex justify-content-around">
          {/* Quick Links Column */}
          <Col md={4} >
          <div className='my-custom'>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/why-choose-us">Why Choose Us</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/case-study">Case Study</Link></li>
            </ul>
            </div>
          </Col>

          {/* Services Column */}
          <Col md={4} >
          <div className='my-custom'>
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/iosdevelopmentpage">iOS Development</Link></li>
              <li><Link to="/androiddevelopmentpage">Android App Development</Link></li>
              <li><Link to="/flutterdevelopmentpage">Flutter App Development</Link></li>
              <li><Link to="/reactnativepage">React Native App Development</Link></li>
              <li><Link to="/gameappdevelopment">Game App Development</Link></li>
            </ul>
            </div>
          </Col>

          {/* Contact Column */}
          <Col md={4} >
          <div className='my-custom'>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li> <a href='tel:+(737) 331-1933'>(737) 331-1933</a></li>
              <li><a href="mailto:info@alliancemobileapp.com">info@alliancemobileapp.com</a></li>
              <li>1611 Monarch Beach Dr Katy, TX 77494</li>
            </ul>
            <h5>Social Media</h5>
            <div className='social-icons'>
              <a href="https://www.facebook.com" className="me-2"><FaFacebook size={24} /></a>
              <a href="https://www.instagram.com" className="me-2"><FaInstagram size={24} /></a>
              <a href="https://www.twitter.com"><FaTwitter size={24} /></a>
            </div>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <div className=" mt-4">
          <p className="mb-0 text-center">Copyright © 2024 Alliance Mobile Apps All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
