import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Nativenumbers = () => {
  return (
    <div className='numbers-section'>
        <Container>
            <h2 className='section-heading text-center mb-5' data-aos="fade-up">Our Proven Process for React Native App Development
            </h2>
        <Row>
                <Col data-aos="fade-up">
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>01</h2>
                    <p>
                    <b>Discovery & Strategy</b> <br/>
                    Tailoring the app to your business needs
                    </p>
                </div>
                 </Col >
                <Col data-aos="fade-up">
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>02</h2>
                    <p>
                        <b> UI/UX Design</b> <br/>
                        Designing for cross-platform consistency
                    </p>
                </div>
                </Col>
                <Col data-aos="fade-up">
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>03</h2>
                    <p>
                    <b> Cross-Platform Development</b> <br/>
                    One codebase, two platforms
                    </p>
                </div>
                </Col>
                <Col data-aos="fade-up">
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>04</h2>
                    <p>
                       <b>Rigorous Testing</b> <br/>
                       Ensuring a flawless experience
                    </p>
                </div>
                </Col>
                <Col data-aos="fade-up">
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>05</h2>
                    <p>
                        <b>Launch & Continuous Support</b> <br/>
                        From launch day to post-launch
                    </p>
                </div>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Nativenumbers







