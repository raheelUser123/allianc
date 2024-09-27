// src/components/HeroSection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import phone from '../images/phone.png';
import Stats from '../components/Stats';  

const HeroSection = () => {
  return (
    <section className="hero-section">

      <Container className="hero-content">
        <Row className="align-items-center">
          <Col md={8}>
            <div className="centerhero">
              <h1 data-aos="fade-up">
              Trusted App 
              </h1>
              <h1 data-aos="fade-up" className="development">Development Partner for American Businesses</h1>
              <p data-aos="fade-up">Developing innovative apps with a seamless experience. Become more accessible and drive more traffic with app development for your business. </p>
              <Button  className="btn1" data-aos="fade-up">
              Let’s Build
              </Button>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="phone-mockup" data-aos="fade-up">
              <img src={phone} alt="Phone Mockup" className="img-fluid" />
            </div>
          </Col>
        </Row>
        {/* Include the Stats component */}
        <Stats />
        
      </Container>
      
    </section>
  );
};

export default HeroSection;
