import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import whatmakesimage from '../images/what-makes-image.png'

const Flutterwhatmakes = () => {
  return (
    <div className='what-makes-section'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='what-makes-image-wrapper'>
                            <img src={whatmakesimage}></img>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <h2 className='section-heading'>
                        Why Your Business Needs a Flutter App
                        </h2>
                        <p>
                        If you're looking to reach users on both iOS and Android without doubling your development effort, Flutter is the ideal solution. Flutter will be the perfect choice if you want to balance speed, cost, and performance. Let us help you determine if Flutter fits your business needs.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Flutterwhatmakes


