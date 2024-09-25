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
          <Col md={7}>
            <div className="centerhero">
              <h1>
                Mobile App 
              </h1>
              <h1 className="development">Development</h1>
              <p>Your Trusted Partner in Mobile App Development</p>
              <Button  className="btn1">
                Case Study
              </Button>
            </div>
          </Col>
          <Col md={5} className="text-center">
            <div className="phone-mockup">
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
