import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import historyimage2010 from '../images/history-image.png';
import historyimage2015 from '../images/history-image-2.jpg';
import historyimage2016 from '../images/history-image-3.jpg';
import historyimage2018 from '../images/history-image-4.jpg';
import historyimage2024 from '../images/history-image-5.jpg';

export const Abouthistory = () => {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);  // Track index instead of year
  const [fade, setFade] = useState(false);  // State to handle fade

  // Data array for each year
  const historyData = [
    {
      year: 2013,
      image: historyimage2010,
      description: 'Secured our first major client, developing an enterprise-level Android app that gained significant traction and opened the doors to new opportunities.',
      heading: ' First Major Client'
    },
    {
      year: 2015 ,
      image: historyimage2015,
      description: 'With a growing demand for iOS apps, we expanded our services and built a team specializing in Apple’s iOS platform, delivering seamless and scalable iOS applications.',
      heading: 'Expansion into iOS Development'
    },
    {
      year: 2016,
      image: historyimage2016,
      description: 'To meet the needs of businesses seeking cost-effective solutions, we launched our Flutter and React Native services, enabling rapid app development for both Android and iOS platforms.',
      heading: ' Cross-Platform Developmen'
    },
    {
      year: 2018,
      image: historyimage2018,
      description: 'Entering the gaming space, we delivered our first major mobile game app, which topped app store charts, further establishing our expertise in creating engaging mobile experiences.',
      heading: 'Game App Development'
    },
    {
      year: 2022,
      image: historyimage2024,
      description: 'One of our apps was recognized with a prestigious mobile app award for innovation and user experience, cementing our reputation in the industry.',
      heading: 'Award-Winning App'
    },
    {
      year: 2024,
      image: historyimage2024,
      description: 'Now at the forefront of app development, we are exploring cutting-edge technologies like AI integration, AR/VR applications, and progressive web apps, continuing to push the boundaries of what’s possible.',
      heading: 'Pioneering New Technologies'
    }
  ];

  // Helper function to change year by array index
  const changeYear = (direction) => {
    setFade(true);  // Start fade-out before changing year
    setTimeout(() => {
      setSelectedYearIndex((prevIndex) => {
        const newIndex = prevIndex + direction;

        // Ensure the new index is within the defined range of years
        if (newIndex < 0) return 0;  // Prevent going below the first index
        if (newIndex >= historyData.length) return historyData.length - 1;  // Prevent going past the last index
        return newIndex;
      });
      setFade(false);  // End fade-out after year changes
    }, 500);  // Duration matches CSS transition time
  };

  // Directly select the history data of the selected year
  const currentHistory = historyData[selectedYearIndex];

  return (
    <div className="about-history-section">
      <Container>
        <div className="history-section">
          <h2>Our Journey from 2012 till Now</h2>
          <p>
            The story of Alliance begins in a small office filled with creative tech enthusiasts providing tech solutions to small businesses. Today the story is favorably transformed into a premium app development company.
            <br />
            Alliance Mobile Apps was founded with a mission to revolutionize the mobile app landscape, delivering high-quality apps tailored to meet business needs.
          </p>
        </div>
        <Row>
          <Col lg="5">
            <div className="history-image">
              {/* Display the current image with fade effect */}
              {currentHistory && (
                <img
                  src={currentHistory.image}
                  width="100%"
                  alt={`History ${currentHistory.year}`}
                  className={fade ? 'fade-out' : ''}  // Apply fade-out class during transition
                />
              )}
            </div>
          </Col>
          <Col lg="1">
            <div className="years">
              {/* List of years */}
              {historyData.map((data, index) => (
                <p
                  key={data.year}
                  onClick={() => {
                    setFade(true);  // Start fade-out before changing year
                    setTimeout(() => {
                      setSelectedYearIndex(index);  // Use index to change year
                      setFade(false);  // End fade-out after year changes
                    }, 500);  // Duration matches CSS transition time
                  }}
                  style={{
                    cursor: 'pointer',
                    color: selectedYearIndex === index ? '#32E0AE' : 'white',  // Highlight selected year
                  }}
                >
                  {data.year}
                </p>
              ))}
            </div>
            <div className="arrows">
              <button
                onClick={() => changeYear(-1)}  // Decrease index (go to previous year)
                style={{ cursor: 'pointer', background: 'none', border: 'none' }}
              >
                <FaArrowUp size={24} />
              </button>
              <button
                onClick={() => changeYear(1)}  // Increase index (go to next year)
                style={{ cursor: 'pointer', background: 'none', border: 'none' }}
              >
                <FaArrowDown size={24} />
              </button>
            </div>
          </Col>
          <Col lg="6">
            {/* Text description with heading and fade effect */}
            {currentHistory && (
              <>
                <h3 className={`history-heading ${fade ? 'fade-out' : ''}`}>
                  {currentHistory.heading}
                </h3>
                <p className={`history-description ${fade ? 'fade-out' : ''}`}>
                  {currentHistory.description}
                </p>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
