// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import social media icons
import Footerlogo from '../images/main-logo.png';

const Footer = () => {
  return (
    <footer className="py-5">
      <Container>
        {/* Logo Section */}
        <div className="text-center mb-4">
          <img src={Footerlogo} alt="Footer Logo" className="img-fluid" />
        </div>

        {/* Links Section */}
        <Row className="">
          {/* Quick Links Column */}
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/why-choose-us">Why Choose Us</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/case-study">Case Study</a></li>
            </ul>
          </Col>

          {/* Services Column */}
          <Col md={3}>
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="/ios-development">iOS Development</a></li>
              <li><a href="/android-development">Android App Development</a></li>
              <li><a href="/game-development">Game App Development</a></li>
              <li><a href="/web-app-development">Web App Development</a></li>
              <li><a href="/mobile-app-development">Mobile App Development</a></li>
              <li><a href="/unity-development">Unity Game Development</a></li>
              <li><a href="/unreal-development">Unreal Game Development</a></li>
              <li><a href="/react-native-development">React Native Development</a></li>
            </ul>
          </Col>

          {/* Industries Column */}
          <Col md={3}>
            <h5>Industries</h5>
            <ul className="list-unstyled">
              <li><a href="/healthcare">Healthcare & Fitness</a></li>
              <li><a href="/real-estate">Real Estate</a></li>
              <li><a href="/ecommerce">Ecommerce & Retail</a></li>
              <li><a href="/logistics">Logistics & Transport</a></li>
              <li><a href="/food-beverage">Food & Beverage</a></li>
              <li><a href="/automotive">Automotive</a></li>
              <li><a href="/education">Education & Elearning</a></li>
              <li><a href="/banking">Banking & Finance</a></li>
            </ul>
          </Col>

          {/* Contact Column */}
          <Col md={3}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>000-123-4567</li>
              <li><a href="mailto:info@allaiancemobileapp.com">info@allaiancemobileapp.com</a></li>
              <li>Lorem Ipsum Street 101, USA</li>
            </ul>
            <h5>Social Media</h5>
            <div className='social-icons'>
              <a href="https://www.facebook.com" className="me-2"><FaFacebook size={24} /></a>
              <a href="https://www.instagram.com" className="me-2"><FaInstagram size={24} /></a>
              <a href="https://www.twitter.com"><FaTwitter size={24} /></a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <div className=" mt-4">
          <p className="mb-0">Copyright © 2024 Alliance Mobile Apps All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;