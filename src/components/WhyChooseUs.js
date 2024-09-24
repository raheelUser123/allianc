// src/components/WhyChooseUs.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './WhyChooseUs.css'; 
import choose from '../images/choose.png'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            {/* Image Placeholder */}
            <div >
            <img src={choose} alt="Phone Mockup" className="image-placeholder" />
            </div>
          </Col>
          <Col md={6}>
            <h2 className="section-heading">
              Why Choose Alliance For Mobile App Development
            </h2>
            <ul className="feature-list">
              <li>
                <h4>Idea Over Investment</h4>
                <p>We prioritize innovative ideas over monetary investment to ensure the best outcomes for your product.</p>
              </li>
              <li>
                <h4>Tech-Driven Solutions</h4>
                <p>We employ the latest technologies to bring scalable and sustainable mobile app solutions tailored to your needs.</p>
              </li>
              <li>
                <h4>Seamless Deployment</h4>
                <p>Our streamlined deployment processes ensure minimal downtime and flawless user experiences across all devices.</p>
              </li>
            </ul>
            <Button variant="warning">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
