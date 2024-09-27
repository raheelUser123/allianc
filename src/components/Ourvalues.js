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
                    <h2 className='section-heading' data-aos="fade-left">Our Values</h2>
                </div>
                <Row>
                    <Col lg='4' data-aos="fade-right">
                        <div className='values-number-box'>
                            <p>
                                01
                            </p>
                        </div>
                    </Col>
                    <Col lg='4' data-aos="fade-right">
                        <div className='values-number-box'>
                            <p>
                                02
                            </p>
                        </div></Col>
                    <Col lg='4' data-aos="fade-right">
                        <div className='values-number-box'>
                            <p>
                                03
                            </p>
                        </div></Col>
                </Row>
                <Row className='respect-section'>
                    <Col lg='4' data-aos="fade-up">
                        <div className='respect-box'>
                            <div className='respect-image-wrapper'>
                                <img src={respectimg1}></img>
                            </div>
                            <h2 className='section-heading'>Innovation</h2>
                            <p>
                            We constantly push the envelope, exploring new technologies and approaches to deliver groundbreaking solutions.
                            </p>
                        </div>
                    </Col>
                    <Col lg='4' data-aos="fade-up">
                        <div className='respect-box'>
                            <div className='respect-image-wrapper'>
                                <img src={respectimg2}></img>
                            </div>
                            <h2 className='section-heading'>Integrity</h2>
                            <p>
                            Transparency and honesty guide everything we do. We are committed to ethical business practices and delivering on our promises.
                            </p>
                        </div>
                    </Col>
                    <Col lg='4' data-aos="fade-up">
                        <div className='respect-box'>
                            <div className='respect-image-wrapper'>
                                <img src={respectimg3}></img>
                            </div>
                            <h2 className='section-heading'>Customer-Centricity</h2>
                            <p>
                            Our clients' success is our priority. We craft solutions that not only meet but exceed expectations, ensuring that each app drives results.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
