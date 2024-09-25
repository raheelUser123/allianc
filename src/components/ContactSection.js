// src/components/ContactSection.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import reahimage from '../images/reach-out-image.png'

const ContactSection = () => {
  return (
    <section className="contact-section text-white">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Reach Out To Us</h2>
            <h4>Got an idea for an app? <br />
              Fill up the details, and we will help you make the most of it.
            </h4>
          </Col>
          <Col md={6}>
          <div className=''></div>
          </Col>
        </Row>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message here" />
          </Form.Group>
          <Button variant="warning" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default ContactSection;
