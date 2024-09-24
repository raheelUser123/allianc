// src/components/EmpowerSection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './EmpowerSection.css';  // We'll style it in the CSS file

// Placeholder for the single image
import image from '../images/single.png';  // Replace with your image path

const EmpowerSection = () => {
  return (
    <section className="empower-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="single-image-wrapper">
              <img src={image} alt="Empowering Your Brand" className="img-fluid" />
            </div>
          </Col>
          <Col md={6}>
            <h2 className="section-heading">
              Empowering Your Brand Through Revolutionary Mobile App Development
            </h2>
            <p className="section-description">
              We are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends.
            </p>
            <div className="buttons">
              <Button variant="warning" className="me-3">Get Started</Button>
              <Button variant="success">Let's Talk</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EmpowerSection;
