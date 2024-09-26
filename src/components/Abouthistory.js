import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import historyimage2010 from '../images/history-image.png';
import historyimage2015 from '../images/history-image-2.jpg';
import historyimage2016 from '../images/history-image-3.jpg';
import historyimage2018 from '../images/history-image-4.jpg';
import historyimage2024 from '../images/history-image-5.jpg';

export const Abouthistory = () => {
  // State to track selected year
  const [selectedYear, setSelectedYear] = useState(2020);
  const [fade, setFade] = useState(false);  // State to handle fade

  // Data array for each year
  const historyData = [
    {
      year: 2020,
      image: historyimage2010,
      description: 'The Alliance brand was born in 2010. With its headquarters in Melbourne, the company rapidly expanded throughout Australia, the UK, Canada, the Middle East and China.'
    },
    {
      year: 2021,
      image: historyimage2015,
      description: 'In 2021, the company launched several innovative projects in the construction industry across Europe and Asia.'
    },
    {
      year: 2022,
      image: historyimage2016,
      description: '2022 marked a year of significant growth in the technology sector, leading to partnerships with industry leaders.'
    },
    {
      year: 2023,
      image: historyimage2018,
      description: 'By 2023, Alliance had become a global leader, pioneering new services in automation and AI.'
    },
    {
      year: 2024,
      image: historyimage2024,
      description: 'In 2024, Alliance is set to expand into new markets, with a focus on sustainable and eco-friendly solutions.'
    }
  ];

  // Helper function to change the year and handle edge cases
  const changeYear = (direction) => {
    setFade(true);  // Start fade-out before changing year
    setTimeout(() => {
      setSelectedYear((prevYear) => {
        const newYear = prevYear + direction;
        // Ensure the new year is within the defined range of years
        if (newYear < 2020) return 2020;
        if (newYear > 2024) return 2024;
        return newYear;
      });
      setFade(false);  // End fade-out after year changes
    }, 500);  // Duration matches CSS transition time
  };

  // Directly select the history data of the selected year
  const currentHistory = historyData.find(data => data.year === selectedYear);

  return (
    <div className='about-history-section'>
      <Container>
        <div className='history-section'>
          <h2>History</h2>
          <p>The Alliance brand was born in 2010. With its <br/> headquarters in Melbourne</p>
        </div>
        <Row>
          <Col lg='5'>
            <div className='history-image'>
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
          <Col lg='1'>
            <div className='years'>
              {/* List of years */}
              {historyData.map((data) => (
                <p
                  key={data.year}
                  onClick={() => {
                    setFade(true);  // Start fade-out before changing year
                    setTimeout(() => {
                      setSelectedYear(data.year);
                      setFade(false);  // End fade-out after year changes
                    }, 500);  // Duration matches CSS transition time
                  }}
                  style={{
                    cursor: 'pointer',
                    color: selectedYear === data.year ? '#32E0AE' : 'white',  // Highlight selected year
                  }}
                >
                  {data.year}
                </p>
              ))}
            </div>
            <div className='arrows'>
              <button
                onClick={() => changeYear(-1)}  // Decrease year
                style={{ cursor: 'pointer', background: 'none', border: 'none' }}
              >
                <FaArrowUp size={24} />
              </button>
              <button
                onClick={() => changeYear(1)}  // Increase year
                style={{ cursor: 'pointer', background: 'none', border: 'none' }}
              >
                <FaArrowDown size={24} />
              </button>
            </div>
          </Col>
          <Col lg='6'>
            {/* Text description with fade effect */}
            {currentHistory && (
              <p className={`history-description ${fade ? 'fade-out' : ''}`}>
                {currentHistory.description}
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
