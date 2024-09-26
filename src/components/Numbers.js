import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Numbers = () => {
  return (
    <div className='numbers-section'>
        <Container>
        <Row>
                <Col>
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>01</h2>
                    <p>
                        Custom App Development <br/>
                        and UI/UX Design
                    </p>
                </div>
                 </Col>
                <Col>
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>02</h2>
                    <p>
                        Apple Watch and <br/>
                        TV App Development
                    </p>
                </div>
                </Col>
                <Col>
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>03</h2>
                    <p>
                        Seamless Migration To <br/>
                        The IOS Platform
                    </p>
                </div>
                </Col>
                <Col>
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>04</h2>
                    <p>
                        IOS Game Development
                    </p>
                </div>
                </Col>
                <Col>
                <div className='numbers-box text-center'>
                    <div className='straight-line-2'></div>
                    <h2>05</h2>
                    <p>
                        Iphone Widget <br/>
                        Development
                    </p>
                </div>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Numbers
