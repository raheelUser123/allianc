import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import revolutionimage1 from '../images/revolution-image.png'

const Androidrevolution = () => {
  return (
    <div className='revolution-sec'>
    <Container>
      <Row>
      <Col lg='6'>
        <h2 className='section-heading'>
        Reach Millions with an Android App
        </h2>
        <p>
        Alliance Mobile Apps offers a dedicated team that excels in creating feature-rich Android applications designed to engage users and drive business growth. We utilize the latest technologies and design principles to deliver custom Android applications tailored to your needs. We have a remarkable track record of serving businesses working on a small-scale and some well-established companies seeking to enhance their digital presence with the help of app development. 
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

export default Androidrevolution



