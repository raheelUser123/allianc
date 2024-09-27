import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import revolutionimage1 from '../images/revolution-image.png'

const Gamereach = () => {
  return (
    <div className='revolution-sec'>
    <Container>
      <Row>
      <Col lg='6' data-aos="fade-right">
        <h2 className='section-heading'>
        Turning Ideas into Read Gaming Experiences
        </h2>
        <p>
        Alliance Mobile Apps is a leading mobile development company that offers you a dedicated team of designers and developers, from the phase of planning to its official execution and launch. Out team delivers engaging, interactive experiences for your users. Whether it’s visually stunning 2D games or cutting-edge Web3 games utilizing blockchain technology, we help bring your game concept to life across multiple platforms. 
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

export default Gamereach







