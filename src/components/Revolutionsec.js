import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import revolutionimage1 from '../images/revolution-image.png'

export const Revolutionsec = () => {
  return (
    <div className='revolution-sec'>
      <Container>
        <Row>
        <Col lg='6' data-aos="fade-right">
          <h2 className='section-heading'>
          Developing Custom iOS Apps for Businesses
          </h2>
          <p>
          Alliance Mobile Apps offers a team of experts and cutting-edge technology to develop iOS for your business. From concept to deployment, our expert team delivers user-centric iOS applications with intuitive design, seamless functionality, and cutting-edge technology. Planning on launching a new product or transforming an existing service, our iOS solutions are built to drive growth and engagement. 

          </p>
        </Col>
        <Col lg='6' data-aos="fade-left">
         <div className='revolution-image-wrapper'>
          <img src={revolutionimage1}></img>
         </div>
        </Col>
        </Row>
      </Container>  
    </div>
  )
}
