// src/components/AwardsSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// Imported placeholders for award images
import award1 from '../images/award1.png';
import award2 from '../images/award2.png';
import award3 from '../images/award3.png';
import award4 from '../images/award4.png';

const AwardsSection = () => {
  return (
    <section className="awards-section">
      <Container>
        <h2 className="section-subheading">Awards and Recognitions</h2>
        <h3 className="section-heading text-center">Celebrating Excellence</h3>
        <p className="section-description">
          See the honors and recognition we've earned for our exceptional<br /> app development work, showcasing our commitment to quality and innovation.
        </p>
        <Row>
          {/* First Award */}
          <Col md={3} className="mb-4" data-aos="fade-up">
            <div className="award-box">
              <img src={award1} alt="Award 1" className="award-image" />
              <h4>Top Mobile App development company</h4>
              <p>See why clients trust us in the mobile app development industry.</p>
            </div>
          </Col>
          
          {/* Second Award */}
          <Col md={3} className="mb-4" data-aos="fade-up">
            <div className="award-box">
              <img src={award2} alt="Award 2" className="award-image" />
              <h4>Top Mobile App development company</h4>
              <p>We received this recognition for our commitment to excellence.</p>
            </div>
          </Col>
          
          {/* Third Award */}
          <Col md={3} className="mb-4" data-aos="fade-down">
            <div className="award-box">
              <img src={award3} alt="Award 3" className="award-image" />
              <h4>Top Mobile App development company</h4>
              <p>Our development work continues to lead the industry standards.</p>
            </div>
          </Col>
          
          {/* Fourth Award */}
          <Col md={3} className="mb-4" data-aos="fade-down">
            <div className="award-box">
              <img src={award4} alt="Award 4" className="award-image" />
              <h4>Top Mobile App development company</h4>
              <p>Our team continues to innovate and deliver award-winning solutions.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AwardsSection;
