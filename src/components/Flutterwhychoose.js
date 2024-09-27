import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import iosappimage from '../images/ios app-image.png'

const Flutterwhychoose = () => {
  return (
    <div className='ios-app-development'>
    <Container>
        <Row>
        <Col lg='6'>
            <div className='ios-app-image-wrapper'>
            <img src={iosappimage}></img>
            </div>
        </Col>
        <Col lg='6'>
            <h2 className='section-heading'>
            Why Choose Us for <br /> Flutter App Development
            </h2>
            <p>
            Choosing Alliance Mobile Apps for your Flutter app development means partnering with experts who prioritize efficiency, design excellence, and innovation. Our cross-platform solutions ensure you reach a broader audience with faster time-to-market and reduced development costs.

            </p>
            <h4>
            Expertise in Flutter
            </h4>
            <p>
            Our team has in-depth knowledge of Flutter and its capabilities, allowing us to build powerful apps that deliver a native experience across platforms.
            </p>
            <h4>
            Cost-Effective Development
            </h4>
            <p>
            By utilizing a single codebase for iOS and Android, we reduce development time and costs while ensuring high-quality performance.
            </p>
            <h4>
            Consistent User Experience
            </h4>
            <p>
            We focus on delivering a unified user experience across both platforms, ensuring that your app looks and performs the same on iOS and Android.
            </p>
            <h4>
            Faster Time to Market
            </h4>
            <p>
            Flutter’s efficiency allows us to develop apps quickly, helping you get to market faster and stay ahead of the competition.
            </p>
            <h4>
            Full Lifecycle Support
            </h4>
            <p>
            From design and development to launch and post-launch maintenance, we offer complete support at every stage of your app’s lifecycle.
            </p>
        </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Flutterwhychoose