// src/components/EmpowerSection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa'; // Import long arrow icon

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
            Developing Your Vision <br/> into an App
            </h2>
            <p className="section-description">
            Alliance Mobile Apps specializes in bringing your vision to life through high-performance, intuitive mobile applications. Our team carefully assesses the needs of every business, whether it’s a startup ready to launch its first app or a well-recognized and established business going through a digital transformation.
            </p>
            <div className="buttons">
              <Button className="me-3 btn1">
              Let’s Talk <FaLongArrowAltRight />
              </Button>
              <Button variant="success">
              Learn More <FaLongArrowAltRight />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EmpowerSection;
