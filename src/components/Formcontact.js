import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    project: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      

      if (response.ok) {
        const result = await response.json();
        setStatusMessage(result.message);
      } else {
        setStatusMessage('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="contact-form-section">
      <Container>
        <Row>
          <h1 className="text-white text-center" data-aos="fade-up">Contact Us</h1>
          <Col lg="6" data-aos="fade-right">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md="6">
                  <Form.Group controlId="formName" className='form-div'>
                    <Form.Label className="text-white">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group controlId="formEmail" className='form-div'>
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <Form.Group controlId="formPhone" className='form-div'>
                    <Form.Label className="text-white">Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group controlId="formService" className='form-div'>
                    <Form.Label className="text-white">Service</Form.Label>
                    <Form.Control
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formProject" className='form-div-2'>
                <Form.Label className="text-white">Tell Us Your Project</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="submit" className="me-3 mt-3 btn1">
                Request Proposal <FaLongArrowAltRight />
              </Button>
            </Form>
            {statusMessage && <p>{statusMessage}</p>}
          </Col>

          <Col lg="6" data-aos="fade-left">
            <div className="info-box">
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
