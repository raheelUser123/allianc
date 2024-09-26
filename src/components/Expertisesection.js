    import React from 'react'
    import { Col, Container, Row } from 'react-bootstrap'
    import expertimg1 from '../images/expert-img-1.png'
    import expertimg2 from '../images/expert-img-2.png'
    import expertimg3 from '../images/expert-img-3.png'
    import expertimg4 from '../images/expert-img-4.png'
    import expertimg5 from '../images/expert-img-5.png'
    import expertimg6 from '../images/expert-img-6.png'
    import expertimg7 from '../images/expert-img-7.png'
    import expertimg8 from '../images/expert-img-8.png'
    import expertimg9 from '../images/expert-img-9.png'
    import expertimg10 from '../images/expert-img-10.png'
    import expertimg11 from '../images/expert-img-11.png'
    import expertimg12 from '../images/expert-img-12.png'
    import expertimg13 from '../images/expert-img-13.png'
    import expertimg14 from '../images/expert-img-14.png'
    import expertimg15 from '../images/expert-img-15.png'

    export const Expertisesection = () => {
        return (
            <div className='expertise-section'>
                <Container>
                    <h2 className='section-heading text-center'>Expertise Across Industries</h2>
                    <Row className='expert-row-1'>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center border-left'>
                                <div className='expert-image'>
                                    <img src={expertimg1}></img>
                                </div>
                                <h4>Real Estate</h4>
                            </div>
                        </Col>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center'>
                                <div className='expert-image'>
                                    <img src={expertimg2}></img>
                                </div>
                                <h4>Government</h4>
                            </div></Col>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center'>
                                <div className='expert-image'>
                                    <img src={expertimg3}></img>
                                </div>
                                <h4>eCommerce</h4>
                            </div>
                        </Col>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center'>
                                <div className='expert-image'>
                                    <img src={expertimg4}></img>
                                </div>
                                <h4>Tech & IT</h4>
                            </div>
                        </Col>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center border-right'>
                                <div className='expert-image'>
                                    <img src={expertimg5}></img>
                                </div>
                                <h4 >Real Estate</h4>
                            </div>
                        </Col>

                    </Row>
                    <Row className='expert-row-2'>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center border-left'>
                                <div className='expert-image'>
                                    <img src={expertimg6}></img>
                                </div>
                                <h4>Non-Profit</h4>
                            </div>
                        </Col>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center'>
                                <div className='expert-image'>
                                    <img src={expertimg7}></img>
                                </div>
                                <h4>Entertainment</h4>
                            </div></Col>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center'>
                                <div className='expert-image'>
                                    <img src={expertimg8}></img>
                                </div>
                                <h4>Fintech</h4>
                            </div>
                        </Col>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center'>
                                <div className='expert-image'>
                                    <img src={expertimg9}></img>
                                </div>
                                <h4>Automotive</h4>
                            </div>
                        </Col>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center border-right'>
                                <div className='expert-image'>
                                    <img src={expertimg10}></img>
                                </div>
                                <h4 >Logistics</h4>
                            </div>
                        </Col>

                    </Row>
                    <Row className='expert-row-3'>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center border-left'>
                                <div className='expert-image'>
                                    <img src={expertimg11}></img>
                                </div>
                                <h4>Hospitality</h4>
                            </div>
                        </Col>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center'>
                                <div className='expert-image'>
                                    <img src={expertimg12}></img>
                                </div>
                                <h4>Business</h4>
                            </div></Col>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center'>
                                <div className='expert-image'>
                                    <img src={expertimg13}></img>
                                </div>
                                <h4>Healthcare</h4>
                            </div>
                        </Col >
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center'>
                                <div className='expert-image'>
                                    <img src={expertimg14}></img>
                                </div>
                                <h4>Social Networking</h4>
                            </div>
                        </Col>
                        <Col data-aos="fade-up">
                            <div className='expert-box text-center border-right'>
                                <div className='expert-image'>
                                    <img src={expertimg15}></img>
                                </div>
                                <h4>Education</h4>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
