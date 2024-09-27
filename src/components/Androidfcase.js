import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Androidfcase = () => {
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
          How long does it take to develop an Android app? {toggleIcon("0")}
          </Accordion.Header>
          <Accordion.Body>
          The timeline varies based on the app’s complexity. Typically, simple apps take 3-6 months, while more complex apps may take 6-12 months.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          What is the cost of Android app development? {toggleIcon("1")}
          </Accordion.Header>
          <Accordion.Body>
          Cost estimates depend on the app's features and complexity. Contact us for a customized quote based on your project needs.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          Do you provide maintenance after the app is launched? {toggleIcon("2")}
          </Accordion.Header>
          <Accordion.Body>
          Yes, we offer ongoing maintenance and support to ensure your app remains up-to-date and functional.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          Can you update my existing Android app?{toggleIcon("3")}
          </Accordion.Header>
          <Accordion.Body>
          Absolutely! We provide update services to enhance your existing app and incorporate new features.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="4">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          What programming languages do you use for Android app development? {toggleIcon("4")}
          </Accordion.Header>
          <Accordion.Body>
          We primarily use Java and Kotlin, which are the industry standards for Android app development.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="5">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          How do you ensure app security?   {toggleIcon("5")}
          </Accordion.Header>
          <Accordion.Body>
          We implement best security practices, including data encryption and secure APIs, to protect user data and app integrity.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="6">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          Can you integrate third-party APIs into the app? {toggleIcon("6")}
          </Accordion.Header>
          <Accordion.Body>
          Yes, we can seamlessly integrate various third-party APIs to enhance your app's functionality and user experience.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="7">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          Do you handle Google Play Store submissions? {toggleIcon("7")}
          </Accordion.Header>
          <Accordion.Body>
          Yes, we manage the entire submission process, ensuring your app meets all Google Play Store guidelines.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="8">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          Will my app work on different Android devices? {toggleIcon("8")}
          </Accordion.Header>
          <Accordion.Body>
          Yes, we develop apps that are compatible with a wide range of Android devices, ensuring a consistent user experience.
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

export default Androidfcase


