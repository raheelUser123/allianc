// src/components/TestimonialsSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section text-center text-white">
      <Container>
        <h2>What Our Clients Say</h2>
        <Row>
          <Col md={6}>
            <div className="testimonial-box">
              <p>"Alliance helped us transform our vision into a top-rated mobile app."</p>
              <span>- Client Name</span>
            </div>
          </Col>
          <Col md={6}>
            <div className="testimonial-box">
              <p>"Incredible team and seamless development process!"</p>
              <span>- Client Name</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
