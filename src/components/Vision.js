import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useCountUp } from 'use-count-up';
import { useInView } from 'react-intersection-observer';

const Vision = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5, // Animation starts when 50% is in view
    });

    // Use useCountUp hook for each counter
    const yearsOfExperience = useCountUp({ isCounting: inView, start: 0, end: 14, duration: 2 });
    const successfulProjects = useCountUp({ isCounting: inView, start: 0, end: 1000, duration: 2 });
    const onTimeDelivery = useCountUp({ isCounting: inView, start: 0, end: 100, duration: 2 });

    return (
        <div className='vision-section'>
            <Container>
                <Row>
                    <Col lg='6' data-aos="fade-up">
                        <div className='vision-box'>
                            <h2 className='section-heading'>Vision</h2>
                            <p>
                                <b>To redefine the future of business by empowering them with creative and innovative tech solutions</b>
                                Our vision is to be the go-to app development agency for businesses across the US and offer them transformative mobile solutions that drive growth, efficiency, and engagement.
                            </p>
                        </div>
                    </Col>
                    <Col lg='6' data-aos="fade-up">
                        <div className='vision-box'>
                            <h2 className='section-heading'>Mission</h2>
                            <p>
                                <b>In this ever-changing digital arena, our mission is to keep up with the needs of the tech environment, all while enabling the businesses of our clients to become more scalable, innovative, and creative with mobile apps.</b>
                                Our mission is to consistently provide quality tech solutions by creating custom, scalable, and reliable mobile apps that align with our clients’ goals. We ensure that the bond with our clients stays strong with post-deployment support.
                            </p>
                        </div>
                    </Col>
                </Row>

                <div className='vision-row-2' ref={ref}>
                    <Row>
                        <Col md={4} data-aos="fade-up">
                            <div className='vision-counter'>
                                <div className='straight-line'></div>
                                <h2 className='section-heading'>
                                    {yearsOfExperience.value}+
                                </h2>
                                <p>Years of Experience</p>
                            </div>
                        </Col>
                        <Col md={4} data-aos="fade-up">
                            <div className='vision-counter'>
                                <div className='straight-line'></div>
                                <h2 className='section-heading'>
                                    {successfulProjects.value}+
                                </h2>
                                <p>Successful Projects</p>
                            </div>
                        </Col>
                        <Col md={4} data-aos="fade-up">
                            <div className='vision-counter'>
                                <div className='straight-line'></div>
                                <h2 className='section-heading'>
                                    {onTimeDelivery.value}%
                                </h2>
                                <p>On Time Delivery</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Vision;
