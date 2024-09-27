import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faqsection = () => {
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
            How long does it take to develop an iOS app? {toggleIcon("0")}
            </Accordion.Header>
            <Accordion.Body>
            The timeline for iOS app development depends on the complexity of the app. On average, a simple app takes 3-6 months, while more complex apps may take 6-12 months.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
            How much does iOS app development cost? {toggleIcon("1")}
            </Accordion.Header>
            <Accordion.Body>
            Costs vary depending on the app’s complexity, features, and design. Contact us for a personalized quote based on your project.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
            Do you offer post-launch support? {toggleIcon("2")}
            </Accordion.Header>
            <Accordion.Body>
            Yes, we provide ongoing maintenance and support after the app is launched to ensure smooth performance and updates.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
            Can you update an existing iOS app? {toggleIcon("3")}
            </Accordion.Header>
            <Accordion.Body>
            Absolutely! We offer app update and improvement services to keep your existing app relevant with the latest features and security updates.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
            Will my iOS app work on iPads as well? {toggleIcon("4")}
            </Accordion.Header>
            <Accordion.Body>
            Yes, we develop apps that are compatible with both iPhones and iPads, ensuring a seamless experience across all iOS devices.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
            What programming languages do you use for iOS app development?   {toggleIcon("5")}
            </Accordion.Header>
            <Accordion.Body>
            We primarily use Swift and Objective-C, both of which are the industry standards for iOS app development.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
            How do you ensure the security of the app? {toggleIcon("6")}
            </Accordion.Header>
            <Accordion.Body>
            We implement Apple’s best practices for security, including data encryption, secure APIs, and compliance with GDPR or other relevant regulations.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="7">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
            Can you integrate third-party services into the app? {toggleIcon("7")}
            </Accordion.Header>
            <Accordion.Body>
            Yes, we can integrate various third-party services such as payment gateways, social media, analytics tools, and more to enhance your app's functionality.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="8">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
            Do you handle app store submissions? {toggleIcon("8")}
            </Accordion.Header>
            <Accordion.Body>
            Yes, we take care of the entire App Store submission process, including ensuring compliance with Apple’s guidelines and optimizing your app listing.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="9">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
            Will I have ownership of the source code? {toggleIcon("9")}
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
  );
};

// Exporting the component correctly
export default Faqsection;
