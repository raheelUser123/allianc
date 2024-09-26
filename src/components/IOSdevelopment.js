import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import iosappimage from '../images/ios app-image.png'

export const IOSdevelopment = () => {
  return (
    <div className='ios-app-development'>
        <Container>
            <Row>
              <Col lg='6'>
               <div className='ios-app-image-wrapper'>
                <img src={iosappimage}></img>
               </div>
               </Col>
              <Col lg='6'>
               <h2 className='section-heading'>
               Why Choose Us For iOS <br/> Mobile Apps Development
               </h2>
               <p>
               When you choose our iPhone app development services, you can rest assured of our commitment to customer satisfaction, dedicated teams, and utmost process transparency.

               </p>
               <h4>
               Customer Satisfaction
               </h4>
               <p>
               We prioritize our customers' satisfaction above all else. We follow agile procedures to ensure that our development process is seamless, and we communicate with our clients every step of the way.
               </p>
               <h4>
               Dedicated Teams
               </h4>
               <p>
               When you choose us for your iPhone app development project, you'll work with a dedicated team of developers who are committed to creating the perfect app for your needs.
               </p>
               <h4>
               Transparent and Flexible <br/> Engagement Models
               </h4>
               <p>
               At our company, we believe in transparency and flexibility. We offer several engagement models to fit our client's needs, including fixed prices, time, and materials.
               </p>
               <h4>
               Competitive Pricing
               </h4>
               <p>
               We believe high-quality iPhone app mobile development service shouldn't break the bank. That's why we offer competitive pricing for all of our services.
               </p>
               </Col>
            </Row>
        </Container>
    </div>
)
}
