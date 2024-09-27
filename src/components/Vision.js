import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Vision = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5, // Animation starts when 50% is in view
    });

    return (
        <div className='vision-section'>
            <Container>
                <Row>
                    <Col lg='6' data-aos="fade-up">
                        <div className='vision-box'>
                            <h2 className='section-heading'>Vision</h2>
                            <p>
                              <b>To redefine the future of business by empowering them with creative and innovative tech solutions </b>Our vision is to be the go-to app development agency for businesses across the US and offer them transformative mobile solutions that drive growth, efficiency, and engagement.
                            </p>
                        </div>
                    </Col>
                    <Col lg='6' data-aos="fade-up">
                        <div className='vision-box'>
                            <h2 className='section-heading'>Mission</h2>
                            <p>
                             <b>In this ever-changing digital arena, our mission is to keep up with the needs of the tech environment, all while enabling the businesses of our clients more scalable, innovative, and creative with mobile apps.</b> Our mission is to consistently provide quality tech solutions by creating custom, scalable, and reliable mobile apps that align with our clients’ goals. Unlike expert tech players in the industry, we ensure that the bond, we form, with our clients stays strong with post-deployment support.
                            </p>
                        </div>
                    </Col>
                </Row>
                <div className='vision-row-2' ref={ref}>
                    <div>
                        <div className='vision-counter' data-aos="fade-up">
                            <div className='straight-line'></div>
                            <h2 className='section-heading'>
                                {inView && <CountUp start={0} end={14} duration={2} />}+    
                            </h2>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                    <div>
                        <div className='vision-counter' data-aos="fade-up" >
                            <div className='straight-line'></div>
                            <h2 className='section-heading'>
                                {inView && <CountUp start={0} end={1000} duration={2} />}+
                            </h2>
                            <p>Successful Projects</p>
                        </div>
                    </div>
                    <div>
                        <div className='vision-counter' data-aos="fade-up">
                            <div className='straight-line'></div>
                            <h2 className='section-heading'>
                                {inView && <CountUp start={0} end={100} duration={2} />}%
                            </h2>
                            <p>on Time Delivery</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Vision;
