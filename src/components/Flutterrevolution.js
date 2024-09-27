import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import revolutionimage1 from '../images/revolution-image.png'

const Flutterrevolution = () => {
  return (
    <div className='revolution-sec'>
    <Container>
      <Row>
      <Col lg='6'>
        <h2 className='section-heading'>
        Powerful Cross-Platform Solutions with Flutter
        </h2>
        <p>
        Are you looking for a way to build visually stunning, natively compiled applications for both iOS and Android from a single codebase? Leverage Flutter with the help of Alliance Mobile Apps. Our team understands the unique needs of your business. Whether your business is small or big, our Flutter app development services provide a cost-effective solution without compromising on quality. With fast deployment and beautiful interfaces, Flutter ensures your app reaches users on multiple platforms without added complexity.
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

export default Flutterrevolution



