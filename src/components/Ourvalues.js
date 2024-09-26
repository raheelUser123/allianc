import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import respectimg1 from '../images/our-values-img-1.png'
import respectimg2 from '../images/our-values-img-2.png'
import respectimg3 from '../images/our-values-img-3.png'

export const Ourvalues = () => {
    return (
        <div className='our-values-section'>
            <Container>
                <div className='our-values-section'>
                    <h2 className='section-heading'>Our Values</h2>
                </div>
                <Row>
                    <Col lg='4'>
                        <div className='values-number-box'>
                            <p>
                                01
                            </p>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className='values-number-box'>
                            <p>
                                02
                            </p>
                        </div></Col>
                    <Col lg='4'>
                        <div className='values-number-box'>
                            <p>
                                03
                            </p>
                        </div></Col>
                </Row>
                <Row className='respect-section'>
                    <Col lg='4'>
                        <div className='respect-box'>
                            <div className='respect-image-wrapper'>
                                <img src={respectimg1}></img>
                            </div>
                            <h2 className='section-heading'>Respect</h2>
                            <p>
                                The way we view our client relationships is one of WebAlive’s defining characteristics. We partner up with our clients to overcome the problems together.
                            </p>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className='respect-box'>
                            <div className='respect-image-wrapper'>
                                <img src={respectimg2}></img>
                            </div>
                            <h2 className='section-heading'>Integrity</h2>
                            <p>
                            Developing close, honest relationships with our clients means we are genuinely driven to see them find success. This is what brings out our best work.
                            </p>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className='respect-box'>
                            <div className='respect-image-wrapper'>
                                <img src={respectimg3}></img>
                            </div>
                            <h2 className='section-heading'>Innovation</h2>
                            <p>
                            We offer solutions to our clients’ problems by applying the latest technologies available. This allows us to solve business problems more effectively.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
