import React, { useState } from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import techimage1 from '../images/tech-stack-image-1.png';
import techimage2 from '../images/tech-stack-image-2.png';
import techimage3 from '../images/tech-stack-image-3.png';
import techimage4 from '../images/tech-stack-image-4.png';
import techimage5 from '../images/tech-stack-image-5.png';
import techimage6 from '../images/tech-stack-image-6.png';

const Techstack = () => {
    const [activeTab, setActiveTab] = useState('iOS');
    const [fade, setFade] = useState(false);

    const getImagesForTab = () => {
        switch (activeTab) {
            case 'iOS':
                return [
                    { img: techimage1, label: 'CircleCI' },
                    { img: techimage2, label: 'CocoaPods' },
                    { img: techimage3, label: 'Objective-C' },
                    { img: techimage4, label: 'RxSwift' },
                    { img: techimage5, label: 'Swiftlint' },
                    { img: techimage6, label: 'SwiftUI' }
                ];
            case 'UI/UX':
                return [
                    { img: techimage4, label: 'Sketch' },
                    { img: techimage2, label: 'Adobe XD' },
                    { img: techimage3, label: 'Figma' }
                ];
            case 'Cloud':
                return [
                    { img: techimage1, label: 'AWS' },
                    { img: techimage4, label: 'Google Cloud' },
                    { img: techimage2, label: 'Azure' }
                ];
            case 'Backend':
                return [
                    { img: techimage3, label: 'Node.js' },
                    { img: techimage2, label: 'Firebase' },
                    { img: techimage4, label: 'MongoDB' }
                ];
            default:
                return [];
        }
    };

    const handleTabSelect = (selectedKey) => {
        setFade(true);
        setTimeout(() => {
            setActiveTab(selectedKey);
            setFade(false);
        }, 200); // Transition duration
    };

    return (
        <div className="tech-stack">
            <Container>
                <Row>
                    <Col lg="6" data-aos="fade-right">
                        <h2 className="section-heading">
                            Our Tech Stack for Robust iOS App Development
                        </h2>
                    </Col>
                    <Col lg="6" data-aos="fade-left">
                        <p className='tech-p'>
                            Access the novel toolkit for full-stack iOS application development. Combined with proficient iOS app development solutions.
                        </p>
                    </Col>
                </Row>

                {/* Tabs Navigation */}
                <div className="tech-stack-tabs-container" >
                    <Nav variant="tabs" activeKey={activeTab} onSelect={handleTabSelect}>
                        <Nav.Item>
                            <Nav.Link eventKey="iOS">iOS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="UI/UX">UI/UX</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Cloud">Cloud</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Backend">Backend & Database</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>

                {/* Dynamic Images */}
                <div className={`tech-stack-image ${fade ? 'fade-out' : 'fade-in'}`}>
                    <Row>
                        {getImagesForTab().map((item, index) => (
                            <Col key={index} lg="2" md="4" sm="6" data-aos="fade-up">
                                <div className="inner-div-class"> {/* Add your inner div here */}
                                    <div className="tech-image-wrapper text-center">
                                        <img src={item.img} alt={`tech-stack-${index}`} className="tech-image" />
                                    </div>
                                    <p className="tech-label text-center">{item.label}</p> {/* Text below the image */}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Techstack;
