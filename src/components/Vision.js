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
                    <Col lg='6'>
                        <div className='vision-box'>
                            <h2 className='section-heading'>Vision</h2>
                            <p>
                                Our vision is to be the most sought after digital agency in Australia, facilitating sustainable growth and prosperity for our local and international clients. We are continuously evolving to become an industry leader in the vibrant field of web technologies.
                            </p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='vision-box'>
                            <h2 className='section-heading'>Mission</h2>
                            <p>
                                Our mission is to transform our clients’ businesses, allowing them to utilise powerful technologies and improve their processes. We want to be consistently bringing out world-class products and services, that benefit businesses of all sizes, making them more efficient and effective.
                            </p>
                        </div>
                    </Col>
                </Row>
                <div className='vision-row-2' ref={ref}>
                    <div>
                        <div className='vision-counter'>
                            <div className='straight-line'></div>
                            <h2 className='section-heading'>
                                {inView && <CountUp start={0} end={14} duration={2} />}+    
                            </h2>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                    <div>
                        <div className='vision-counter'>
                            <div className='straight-line'></div>
                            <h2 className='section-heading'>
                                {inView && <CountUp start={0} end={1000} duration={2} />}+
                            </h2>
                            <p>Successful Projects</p>
                        </div>
                    </div>
                    <div>
                        <div className='vision-counter'>
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
