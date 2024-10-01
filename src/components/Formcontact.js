// ContactSection.js
import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="contact-form-section">
      <Container>
        <Row>
        <h1 className="text-white text-center "  data-aos="fade-up">Contact Us</h1>
          {/* Contact Form Column */}
          <Col lg="6"  data-aos="fade-right">
            <Form>
              <Row>
                <Col md="6">
                  <Form.Group controlId="formName" className='form-div'>
                    <Form.Label className="text-white">Name</Form.Label>
                    <Form.Control type="text"  />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group controlId="formEmail" className='form-div'>
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control type="email"  />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <Form.Group controlId="formPhone" className='form-div'>
                    <Form.Label className="text-white">Phone</Form.Label>
                    <Form.Control type="text"  />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group controlId="formService" className='form-div'>
                    <Form.Label className="text-white">Service</Form.Label>
                    <Form.Control type="text"  />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formProject" className='form-div-2'>
                <Form.Label className="text-white">Tell Us Your Project</Form.Label>
                <Form.Control as="textarea" rows={3}  />
              </Form.Group>
              <Button className="me-3 mt-3 btn1">
              Request Proposal <FaLongArrowAltRight />
              </Button>
            </Form>
          </Col>

          {/* Info Section Column */}
          <Col lg="6"  data-aos="fade-left">
            <div className="info-box ">
              <h3>Let's Talk Business</h3>
              <p>Fill up the form and our team will <br /> get back to you within 24 hours.</p>
              <div className='info-email'>
              <p>Email: info@alliancemobileapp.com</p>
              <p>Phone: (737) 331-1933</p>
              <p>Address: 1611 Monarch Beach Dr Katy, TX 77494</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
