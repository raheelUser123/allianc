// src/components/WhyChooseUs.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section text-center">
      <Container>
        <Row>
          <Col md={6}>
            {/* Image Placeholder */}
            <div className="developer-image">
              {/* Add img HTML here */}
            </div>
          </Col>
          <Col md={6} className="my-auto">
            <h2>Why Choose Alliance For Mobile App Development?</h2>
            <ul className="list-unstyled">
              <li>Data-Driven Investment</li>
              <li>Result-Driven Solutions</li>
              <li>Seamless Deployment</li>
            </ul>
            <Button variant="warning">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
