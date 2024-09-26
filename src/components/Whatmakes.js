import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import whatmakesimage from '../images/what-makes-image.png'
export const Whatmakes = () => {
    return (
        <div className='what-makes-section'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='what-makes-image-wrapper'>
                            <img src={whatmakesimage}></img>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <h2 className='section-heading'>
                            What Makes Our iOS App <br /> Development Services<br />  Value-Driven?
                        </h2>
                        <p>
                            iOS app development service is for businesses of all sizes – a strategic advantage for growth-enabled tech transformation. With deep expertise and novel technologies like Swift, SwiftUI, and Core Data build highly performant and scalable Apple apps.
                            We follow Agile methodologies and DevOps practices for rapid development cycles, continuous integration, and upscale to create fast and secure apps. Our top-tier iOS app developers and QA engineers rigorously test each component for flawless functionality across Apple devices.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
