// src/components/CaseStudySection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CaseStudySection = () => {
  return (
    <section className="case-study-section text-center">
      <Container>
        <h2>Case Study</h2>
        <Row>
          <Col md={4}>
            {/* Image Placeholder */}
            <div className="case-study-image">
              {/* Add img HTML here */}
            </div>
            <Button variant="outline-light" className="mt-2">View Case Study</Button>
          </Col>
          <Col md={4}>
            {/* Image Placeholder */}
            <div className="case-study-image">
              {/* Add img HTML here */}
            </div>
            <Button variant="outline-light" className="mt-2">View Case Study</Button>
          </Col>
          <Col md={4}>
            {/* Image Placeholder */}
            <div className="case-study-image">
              {/* Add img HTML here */}
            </div>
            <Button variant="outline-light" className="mt-2">View Case Study</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CaseStudySection;
