import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import whatmakesimage from '../images/what-makes-image.png'

const Gamewhy = () => {
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
                Why Your Business Needs a Game App
                </h2>
                <p>
                Game apps are increasingly becoming popular form of entertainment, offering immense opportunities for both revenue and user engagement. There are more than enough reasons you can get your game app developed, such as monetization opportunities to generate revenue and if you’re opting for web3 and blockchain integration that will open up more opportunities. Still uncertain whether your business should venture into game app development, our team can guide you through the best options based on your industry and goals. 

                </p>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Gamewhy






