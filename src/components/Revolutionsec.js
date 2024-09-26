import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import revolutionimage1 from '../images/revolution-image.png'

export const Revolutionsec = () => {
  return (
    <div className='revolution-sec'>
      <Container>
        <Row>
        <Col lg='6'>
          <h2 className='section-heading'>
            Revolutionize Your Business <br /> With Our iOS App Development<br /> Services
          </h2>
          <p>
            Do you have a vision but no direction?  <br />
            Our team of expert developers can help you create the perfect iOS solution. Our industry-best iOS mobile app development services have been helping businesses for many years.

          </p>
        </Col>
        <Col lg='6'>
         <div className='revolution-image-wrapper'>
          <img src={revolutionimage1}></img>
         </div>
        </Col>
        </Row>
      </Container>
    </div>
  )
}
