import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Nativecase = () => {
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
          What is React Native? {toggleIcon("0")}
          </Accordion.Header>
          <Accordion.Body>
          React Native is a popular open-source framework that allows developers to build mobile apps for both iOS and Android from a single codebase.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          How does React Native compare to native app development? {toggleIcon("1")}
          </Accordion.Header>
          <Accordion.Body>
          React Native provides a native-like experience but reduces development time and costs by using a single codebase for both platforms, whereas native apps require separate development for iOS and Android.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          What types of apps can be built with React Native? {toggleIcon("2")}
          </Accordion.Header>
          <Accordion.Body>
          Virtually any app can be built with React Native, including e-commerce, social media, productivity, and gaming apps.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          Is React Native suitable for large-scale apps? {toggleIcon("3")}
          </Accordion.Header>
          <Accordion.Body>
          Yes, React Native can scale to support large apps with complex features, and it’s backed by a large community and industry leaders like Facebook.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="4">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          Can existing apps be migrated to React Native?  {toggleIcon("4")}
          </Accordion.Header>
          <Accordion.Body>
          Yes, we can help migrate your existing apps to React Native to take advantage of cross-platform capabilities and reduced costs.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="5">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          How long does it take to build a React Native app?  {toggleIcon("5")}
          </Accordion.Header>
          <Accordion.Body>
          Development time depends on the app's complexity, but React Native typically reduces the timeline compared to separate iOS and Android development.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="6">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          What is the cost of developing a React Native app? {toggleIcon("6")}
          </Accordion.Header>
          <Accordion.Body>
          Costs vary based on the app's features and complexity, but React Native offers a more affordable option by eliminating the need for separate platform development.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="7">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          Does React Native offer good performance? {toggleIcon("7")}
          </Accordion.Header>
          <Accordion.Body>
          React Native apps perform very close to native apps, offering fast, responsive, and smooth user experiences across platforms.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="8">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          Do you provide support after the app launch? {toggleIcon("8")}
          </Accordion.Header>
          <Accordion.Body>
          Yes, we provide ongoing support, updates, and maintenance to ensure your app stays functional and competitive after launch.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="9">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          How do I know if React Native is the right choice for my app? {toggleIcon("9")}
          </Accordion.Header>
          <Accordion.Body>
          We can help assess your app requirements and determine whether React Native, native development, or another solution is the best fit for your business.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
    </div>
    </Container>
  </div>
  )
}

export default Nativecase






