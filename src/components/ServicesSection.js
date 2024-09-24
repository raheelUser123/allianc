// src/components/ServicesSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ServicesSection.css';  // Add custom styles for this section

// Example image imports - Replace with actual image paths
import iosIcon from '../images/ios-icon.png';
import androidIcon from '../images/android-icon.png';
import gameIcon from '../images/game-icon.png';
import webIcon from '../images/web-icon.png';
import wearableIcon from '../images/wearable-icon.png';
import iotIcon from '../images/iot-icon.png';

const services = [
  {
    title: 'iOS App Development',
    description: 'We offer robust iOS app development services that allow users a smooth experience on their Apple devices.',
    icon: iosIcon,
  },
  {
    title: 'Android App Development',
    description: 'Our mobile app developers are well-versed in deploying exceptional Android apps enriched with appealing UI/UX design.',
    icon: androidIcon,
  },
  {
    title: 'Game App Development',
    description: 'The mobile game we develop keeps the users engaged for hours and offers them a highly immersive experience.',
    icon: gameIcon,
  },
  {
    title: 'Web App Development',
    description: 'To offer a more cost-effective option, we create highly-functional web apps that are fully optimized to run on any platform.',
    icon: webIcon,
  },
  {
    title: 'Wearable App Development',
    description: 'Our wearable app development solutions are empowered by cutting-edge technology, offering users extreme portability.',
    icon: wearableIcon,
  },
  {
    title: 'IoT App Development',
    description: 'Our developed IoT apps enable our customers to gain more insight into their products using analytics and data processing.',
    icon: iotIcon,
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <Container>
        <h2 className="section-heading">Mobile App Development Services We Offer</h2>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="service-box text-center">
                {/* Replace with actual images for icons */}
                <div className="icon-wrapper">
                  <img src={service.icon} alt={service.title} className="service-icon img-fluid" />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
