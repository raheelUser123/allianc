import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import whatmakesimage from '../images/what-makes-image.png'

const Androidwhat = () => {
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
                Why Your Business Needs <br /> an Android App
                </h2>
                <p>
                With over two billion active Android devices globally, an Android app is essential for reaching a vast audience. If your audience predominantly uses Android devices, an Android app is a must. Consult with us to determine the best approach for your business.

                </p>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Androidwhat

