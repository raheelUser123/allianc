import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import revolutionimage1 from '../images/revolution-image.png'

const Nativerevolution = () => {
  return (
    <div className='revolution-sec'>
    <Container>
      <Row>
      <Col lg='6' data-aos="fade-right">
        <h2 className='section-heading'>
        React Native Mobile App Development Company
        </h2>
        <p>
        Alliance Mobile Apps offers a React Native Development services to all those companies seeking achieve high-performance, scalable and cost-effective mobile applications. By developing with a single codebase, we cut development time and costs while delivering native-like experiences on both iOS and Android. Our team holds years of experience in helping clients streamline operations, reach more users, and stay ahead of the competition with a React Native app that performs seamlessly across platforms. 
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

export default Nativerevolution





