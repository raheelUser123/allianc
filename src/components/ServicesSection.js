// src/components/ServicesSection.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';


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
    description: 'Building seamless and robust iOS applications that deliver high performance and a premium user experience.',
    icon: iosIcon,
  },
  {
    title: 'Android App Development',
    description: 'Engage your users and enhance your brands reach with an Android application. Bring performance, scalability, and compatibility across different Android devices.',
    icon: androidIcon,
  },
  {
    title: 'Flutter App Development',
    description: 'Cross-platform apps developed with Flutter offer seamless experiences on both iOS and Android from a single codebase.',
    icon: gameIcon,
  },
  {
    title: 'React Native App Development',
    description: 'Accelerate your time to market with React Native, offering powerful, native-like app experiences on multiple platforms.',
    icon: webIcon,
  },
  {
    title: 'Game App Development',
    description: 'Create immersive game apps with stunning graphics and engaging gameplay for mobile platforms.',
    icon: wearableIcon,
  },
  {
    title: 'Web App Development',
    description: 'Deliver exceptional web-based applications that function smoothly on any device, ensuring a cohesive experience for users.',
    icon: iotIcon,
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
     
        <h2 className="section-heading" data-aos="fade-up">A Full Spectrum of Our <br/> App Development Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4" data-aos="fade-up">
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

    </section>
  );
};

export default ServicesSection;
