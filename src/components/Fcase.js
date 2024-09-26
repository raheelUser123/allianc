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
        <h2 className="section-heading text-center">iOS App Development</h2>

      <div className='accord-div' data-aos="fade-up">
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
              How long does it take to develop an iPhone app? {toggleIcon("0")}
            </Accordion.Header>
            <Accordion.Body>
              The time to develop an iPhone app depends on the complexity but usually takes 3 to 6 months.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
              How long does it take to develop an iPhone app? {toggleIcon("1")}
            </Accordion.Header>
            <Accordion.Body>
              The time to develop an iPhone app depends on the complexity but usually takes 3 to 6 months.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
              How long does it take to develop an iPhone app? {toggleIcon("2")}
            </Accordion.Header>
            <Accordion.Body>
              The time to develop an iPhone app depends on the complexity but usually takes 3 to 6 months.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
              How long does it take to develop an iPhone app? {toggleIcon("3")}
            </Accordion.Header>
            <Accordion.Body>
              The time to develop an iPhone app depends on the complexity but usually takes 3 to 6 months.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
              How long does it take to develop an iPhone app? {toggleIcon("4")}
            </Accordion.Header>
            <Accordion.Body>
              The time to develop an iPhone app depends on the complexity but usually takes 3 to 6 months.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
              How long does it take to develop an iPhone app? {toggleIcon("5")}
            </Accordion.Header>
            <Accordion.Body>
              The time to develop an iPhone app depends on the complexity but usually takes 3 to 6 months.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
              How long does it take to develop an iPhone app? {toggleIcon("6")}
            </Accordion.Header>
            <Accordion.Body>
              The time to develop an iPhone app depends on the complexity but usually takes 3 to 6 months.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="7">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
              How long does it take to develop an iPhone app? {toggleIcon("7")}
            </Accordion.Header>
            <Accordion.Body>
              The time to develop an iPhone app depends on the complexity but usually takes 3 to 6 months.
            </Accordion.Body>
          </Accordion.Item>

          {/* Add more FAQs here */}
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Accordion.Item eventKey="8">
            <Accordion.Header className="d-flex justify-content-between align-items-center">
              How long does it take to develop an iPhone app? {toggleIcon("8")}
            </Accordion.Header>
            <Accordion.Body>
              The time to develop an iPhone app depends on the complexity but usually takes 3 to 6 months.
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
