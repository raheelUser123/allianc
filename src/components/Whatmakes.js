import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import whatmakesimage from '../images/what-makes-image.png'
export const Whatmakes = () => {
    return (
        <div className='what-makes-section'>
            <Container>
                <Row>
                    <Col lg='6' data-aos="fade-right">
                        <div className='what-makes-image-wrapper'>
                            <img src={whatmakesimage}></img>
                        </div>
                    </Col>
                    <Col lg='6' data-aos="fade-left"> 
                        <h2 className='section-heading'>
                            Why Your Business Needs <br /> an iOS App
                        </h2>
                        <p>
                            With a global user base, the iOS platform is ideal for businesses aiming to reach a premium, tech-savvy audience. However, choosing between iOS, Android, or other platforms depends on your business goals.
                            If your business caters to a diverse, global audience, or requires cross-platform accessibility, Android or React Native may be better options. Consult with us to determine the best fit for your goals.

                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
