import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';


const Gamecase = () => {
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
          What types of games can you develop? {toggleIcon("0")}
          </Accordion.Header>
          <Accordion.Body>
          We develop a wide range of game apps, from casual 2D games to advanced 3D games, including Web3 games integrated with blockchain and NFTs
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          What is Web3 game development? {toggleIcon("1")}
          </Accordion.Header>
          <Accordion.Body>
          Web3 games leverage blockchain technology, enabling decentralized economies, NFTs, and tokenized rewards within the game, giving players true ownership of digital assets.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          Can you help with 2D game development? {toggleIcon("2")}
          </Accordion.Header>
          <Accordion.Body>
          Yes, we have expertise in creating engaging and visually captivating 2D games, offering lower development costs and faster time-to-market.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          What platforms do you develop games for? {toggleIcon("3")}
          </Accordion.Header>
          <Accordion.Body>
          We develop for iOS, Android, and blockchain-based platforms like Ethereum and Solana, ensuring your game is available to a wide audience.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="4">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          How do you integrate NFTs and blockchain into a game? {toggleIcon("4")}
          </Accordion.Header>
          <Accordion.Body>
          We use blockchain frameworks to integrate NFTs, smart contracts, and tokenized rewards into the game, enabling players to buy, sell, or trade in-game assets.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="5">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          What’s the typical timeline for game app development?  {toggleIcon("5")}
          </Accordion.Header>
          <Accordion.Body>
          The timeline varies based on complexity, but a standard game development project may take 3 to 9 months. Web3 games with blockchain integration may take longer.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="6">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          Do you provide post-launch support for game apps? {toggleIcon("6")}
          </Accordion.Header>
          <Accordion.Body>
          Yes, we offer full post-launch support, including updates, new content, and bug fixes, ensuring your game continues to run smoothly.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="7">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          What game engines do you use? {toggleIcon("7")}
          </Accordion.Header>
          <Accordion.Body>
          We use Unity and Unreal Engine for 2D and 3D games, and blockchain platforms like Solana and Ethereum for Web3 game development.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="8">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          How do I monetize a game app? {toggleIcon("8")}
          </Accordion.Header>
          <Accordion.Body>
          We can help implement monetization strategies such as in-app purchases, ads, NFT marketplaces, and subscription models.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Accordion.Item eventKey="9">
          <Accordion.Header className="d-flex justify-content-between align-items-center">
          How do I get started with developing a game app? {toggleIcon("9")}
          </Accordion.Header>
          <Accordion.Body>
          Simply reach out to our team, and we’ll help you map out your game concept, development process, and launch strategy.
          </Accordion.Body>
        </Accordion.Item>

        {/* Add more FAQs here */}
      </Accordion>
    </div>
    </Container>
  </div>
  )
}

export default Gamecase





