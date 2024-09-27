import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Fluttercase = () => {
    const [activeKey, setActiveKey] = React.useState(null);

    const toggleIcon = (key) => (key === activeKey ? <FaMinus /> : <FaPlus />);
    return (
        <div className="faqs-section">
            <Container>
                <h2 className="section-heading text-center green">Frequently Asked Questions</h2>
                <div className='accord-div' data-aos="fade-up">
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="d-flex justify-content-between align-items-center">
                                What is Flutter, and why should I use it for app development? {toggleIcon("0")}
                            </Accordion.Header>
                            <Accordion.Body>
                                Flutter is an open-source UI software development kit by Google that allows developers to build natively compiled apps for mobile, web, and desktop from a single codebase, reducing development time and cost
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Add more FAQs here */}
                    </Accordion>
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="d-flex justify-content-between align-items-center">
                                Is Flutter suitable for all types of apps? {toggleIcon("1")}
                            </Accordion.Header>
                            <Accordion.Body>
                                Yes, Flutter is versatile and can be used to build a variety of apps, including e-commerce, social media, finance, and more. However, we’ll evaluate your specific needs to ensure it’s the best fit for your project.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Add more FAQs here */}
                    </Accordion>
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="d-flex justify-content-between align-items-center">
                                How long does it take to build a Flutter app? {toggleIcon("2")}
                            </Accordion.Header>
                            <Accordion.Body>
                                The development timeline depends on the app’s complexity. On average, Flutter apps take 3-6 months for simple applications and longer for more complex ones.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Add more FAQs here */}
                    </Accordion>
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header className="d-flex justify-content-between align-items-center">
                                Can you integrate third-party services and APIs into my Flutter app?
                                {toggleIcon("3")}
                            </Accordion.Header>
                            <Accordion.Body>
                            Yes, we can seamlessly integrate third-party services, APIs, and backend systems to enhance the functionality of your Flutter app.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Add more FAQs here */}
                    </Accordion>
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header className="d-flex justify-content-between align-items-center">
                            How does Flutter compare to native app development? {toggleIcon("4")}
                            </Accordion.Header>
                            <Accordion.Body>
                            Flutter allows for faster development and lower costs by using a single codebase for both iOS and Android, while native development requires separate codebases. However, native apps can offer slightly better performance for certain use cases.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Add more FAQs here */}
                    </Accordion>
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header className="d-flex justify-content-between align-items-center">
                            Will my Flutter app look the same on iOS and Android?   {toggleIcon("5")}
                            </Accordion.Header>
                            <Accordion.Body>
                            Flutter is designed to deliver a consistent user experience across platforms while maintaining platform-specific functionality, such as navigation patterns or design elements.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Add more FAQs here */}
                    </Accordion>
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header className="d-flex justify-content-between align-items-center">
                            Do you provide post-launch support for Flutter apps? {toggleIcon("6")}
                            </Accordion.Header>
                            <Accordion.Body>
                            Yes, we offer continuous support and maintenance after the app’s launch to ensure it remains up-to-date and functional.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Add more FAQs here */}
                    </Accordion>
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header className="d-flex justify-content-between align-items-center">
                            Can my existing app be migrated to Flutter? {toggleIcon("7")}
                            </Accordion.Header>
                            <Accordion.Body>
                            Yes, we can help migrate your existing app to Flutter, providing enhanced performance, features, and cross-platform compatibility.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Add more FAQs here */}
                    </Accordion>
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header className="d-flex justify-content-between align-items-center">
                            How do you ensure the quality of a Flutter app?{toggleIcon("8")}
                            </Accordion.Header>
                            <Accordion.Body>
                            We conduct thorough testing on multiple devices and platforms to ensure that your app functions flawlessly. Our quality assurance process includes performance testing, usability testing, and debugging.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Add more FAQs here */}
                    </Accordion>
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header className="d-flex justify-content-between align-items-center">
                                Will I own the source code of my app? {toggleIcon("9")}
                            </Accordion.Header>
                            <Accordion.Body>
                                Yes, once the app is developed and delivered, you will have full ownership of the source code.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Add more FAQs here */}
                    </Accordion>
                </div>
            </Container>
        </div>
    )
}

export default Fluttercase

