// src/components/CaseStudySection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CaseStudySection.css';
import case1 from '../images/case1.png'; // Imported image 1
import case2 from '../images/case2.png'; // Imported image 2

const CaseStudySection = () => {
  return (
    <section className="case-study-section">
      <Container>
        <h2 className="section-heading">Case Study</h2>
        <Row>
          {/* First Case Study */}
          <Col md={6} className="mb-4">
            <div className="case-study-box">
              <div className="case-study-image">
                <img src={case2} alt="Staff Education Mobile App design" className="img-fluid" />
              </div>
              <h4 >Staff Education Mobile App design</h4>
              <p>
                Details to showcase. Get your app generated in less time with ample work to do, so go on.
              </p>
              <div className="case-study-buttons">
                <Button variant="warning" className="me-3">Browse your Project</Button>
                <Button variant="success">View Case Study</Button>
              </div>
            </div>
          </Col>

          {/* Second Case Study */}
          <Col md={6} className="mb-4">
            <div className="case-study-box">
              <div className="case-study-image">
                <img src={case1} alt="Healthcare service - Mobile app" className="img-fluid" />
              </div>
              <h4>Healthcare service - Mobile app</h4>
              <p>
                Details to showcase. Get your app generated in less time with ample work to do, so go on.
              </p>
              <div className="case-study-buttons">
                <Button variant="warning" className="me-3">Browse your Project</Button>
                <Button variant="success">View Case Study</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CaseStudySection;
