// src/components/ContactSection.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import reachimage from '../images/reach-out-image.png'
import { FaLongArrowAltRight } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="contact-section text-white">
      <Container>
        <Row className='form-row1'>
          <Col md={7}>
            <div className='contact-content'>
              <div className='contact-heading'>
              <h2>Reach Out To Us</h2>
              <h4>Got an idea for an app? <br />
                Fill up the details, and we will help you make the most of it.
              </h4>
              </div>
            </div>
          </Col>
          <Col md={5}>
          <div className='reach-image'>
               <img src={reachimage}></img>
              </div></Col>
        </Row>
        <Form className="custom-form">
      <Row>
        <Col md={6}>
        <Form.Group controlId="formName">
            <Form.Label>Hey, My Name Is</Form.Label>
            <Form.Control style={{ width:'79%' }} type="text"  />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formLookingFor">
            <Form.Label >And I'm Looking For</Form.Label>
            <Form.Control  style={{ width:'75%' }} type="text"  />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <Form.Group controlId="formContact">
            <Form.Label>Get In Touch With Me At</Form.Label>
            <Form.Control type="email"/>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formStartDate">
          <Form.Label style={{ width:'5%' }}>or</Form.Label>
            <Form.Control style={{ width:'100%' }} type="text" />
          </Form.Group>
        </Col>
      </Row>
      <Row className='mt-3'>
      <Col md={6}>
          <Form.Group controlId="formStartDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control style={{ width:'87%' }} type="date" />
          </Form.Group>
        </Col>
        <Col className="d-flex justify-content-start"> 
          <Button  type="submit" className="custom-button btn1">
            Send Enquiry <FaLongArrowAltRight />
          </Button>
        </Col>
      </Row>
    </Form>
    <div className='form-text mt-3'>
      <p className='text-white'>
      By clicking "Submit," you acknowledge and agree to the Terms of Use and Privacy Policy ALLIANCE MOBILE APP You also provide your consent to receive phone calls and SMS messages from ALLIANCE MOBILE APP for information pertaining to our services and order updates. Message frequency will vary based on your activity. Standard messaging rates may apply. To stop receiving messages, text "STOP" at any time. For help, text "HELP." Please review our Privacy Policy for more information.
      </p>
    </div>
      </Container>
    </section>
  );
}

export default ContactSection;
