import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import whatmakesimage from '../images/what-makes-image.png'

const Nativewhy = () => {
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
                            Why Your Business Needs a React Native App
                        </h2>
                        <p>
                            React Native is the perfect solution for businesses looking to reach both iOS and Android users without the expense of developing two separate apps. If you’re looking for fast development, cost-efficiency, and a native-like user experience, React Native might be the right choice.
               <br />
                            If you're still unsure whether React Native is right for your business, our experts can help assess your needs and recommend the best solution

                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Nativewhy



