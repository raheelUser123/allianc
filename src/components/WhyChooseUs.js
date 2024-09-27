// src/components/WhyChooseUs.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa'; // Import long arrow icon
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
            Why Choose Alliance for App Development?
            </h2>
            <ul className="feature-list">
              <li>
                <h4>Expert Team</h4>
                <p>Invest in our team and see how they go the extra mile so that you can make the most of your end product.</p>
              </li>
              <li>
                <h4>Seamless Deployment</h4>
                <p>From ideation to launch and beyond, we support you through every stage of the app development process along with ongoing post-deployment support.
                </p>
              </li>
              <li>
                <h4>Client-Centric Approach</h4>
                <p>Your goals are our priority. We ensure that your app not only meets your business needs but exceeds your expectations.</p>
              </li>
            </ul>
            <Button className="btn1 button">Let’s Talk <FaLongArrowAltRight /></Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
