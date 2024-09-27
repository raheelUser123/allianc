import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Numbers = () => {
  return (
    <div className='numbers-section'>
        <Container>
            <h2 className='section-heading text-center mb-5' data-aos="fade-up">Our Proven Process for iOS App Development</h2>
        <Row>
                <Col data-aos="fade-up">
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>01</h2>
                    <p>
                    <b>Ideation & Discovery</b> <br/>
                    Understanding your vision
                    </p>
                </div>
                 </Col>
                <Col data-aos="fade-up">
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>02</h2>
                    <p>
                        <b> UX/UI Design</b> <br/>
                        Crafting delightful experiences
                    </p>
                </div>
                </Col>
                <Col data-aos="fade-up">
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>03</h2>
                    <p>
                    <b> Development & Coding</b> <br/>
                    Building with precision
                    </p>
                </div>
                </Col>
                <Col data-aos="fade-up">
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>04</h2>
                    <p>
                       <b>Testing & Quality Assurance</b> <br/>
                       Ensuring a flawless experience
                    </p>
                </div>
                </Col>
                <Col data-aos="fade-up">
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>05</h2>
                    <p>
                        <b>Deployment & Support</b> <br/>
                        Launching your app to the world
                    </p>
                </div>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Numbers
