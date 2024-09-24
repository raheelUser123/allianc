// src/components/AwardsSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const awards = [
  { title: 'Top Mobile App Agency', description: 'Best mobile app development agency award' },
  { title: 'Top iOS Development Agency', description: 'Recognized for exceptional iOS development' },
  { title: 'Top Android Development Agency', description: 'Awarded for leading Android app solutions' },
];

const AwardsSection = () => {
  return (
    <section className="awards-section text-center">
      <Container>
        <h2>Awards and Recognitions</h2>
        <Row>
          {awards.map((award, index) => (
            <Col md={4} key={index}>
              <div className="award-box">
                <h4>{award.title}</h4>
                <p>{award.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AwardsSection;
