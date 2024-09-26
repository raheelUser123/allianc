import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import expertimg1 from '../images/expert-img-1.png'

export const Expertisesection = () => {
    return (
        <div className='expertise-section'>
            <Container>
                <h2 className='section-heading text-center'>Expertise Across Industries</h2>
                <Row className='expert-row-1'>
                    <Col>
                        <div className='expert-box text-center'>
                            <div className='expert-image'>
                                <img src={expertimg1}></img>
                            </div>
                            <h4 >Real Estate</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className='expert-box text-center'>
                            <div className='expert-image'>
                                <img src={expertimg1}></img>
                            </div>
                            <h4 >Real Estate</h4>
                        </div></Col>
                    <Col>
                        <div className='expert-box text-center'>
                            <div className='expert-image'>
                                <img src={expertimg1}></img>
                            </div>
                            <h4 >Real Estate</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className='expert-box text-center'>
                            <div className='expert-image'>
                                <img src={expertimg1}></img>
                            </div>
                            <h4 >Real Estate</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className='expert-box text-center'>
                            <div className='expert-image'>
                                <img src={expertimg1}></img>
                            </div>
                            <h4 >Real Estate</h4>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
