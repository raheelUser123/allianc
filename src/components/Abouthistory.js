import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import historyimage2010 from '../images/history-image.png';
import historyimage2015 from '../images/history-image.png';
import historyimage2016 from '../images/history-image.png';
import historyimage2018 from '../images/history-image.png';
import historyimage2024 from '../images/history-image.png';

export const Abouthistory = () => {
  // State to track selected year
  const [selectedYear, setSelectedYear] = useState(2010);

  // Data array for each year
  const historyData = [
    {
      year: 2010,
      image: historyimage2010,
      description: 'The Alliance brand was born in 2010. With its headquarters in Melbourne, the company rapidly expanded throughout Australia, the UK, Canada, the Middle East, and China.'
    },
    {
      year: 2013,
      image: historyimage2015,
      description: 'In 2015, the company launched several innovative projects in the construction industry across Europe and Asia.'
    },
    {
      year: 2014,
      image: historyimage2016,
      description: '2016 marked a year of significant growth in the technology sector, leading to partnerships with industry leaders.'
    },
    {
      year: 2015,
      image: historyimage2018,
      description: 'By 2018, Alliance had become a global leader, pioneering new services in automation and AI.'
    },
    {
      year: 2016,
      image: historyimage2024,
      description: 'In 2024, Alliance is set to expand into new markets, with a focus on sustainable and eco-friendly solutions.'
    }
  ];

  // Helper function to change the year and handle edge cases
  const changeYear = (direction) => {
    setSelectedYear((prevYear) => {
      const newYear = prevYear + direction;
      // Ensure the new year is within the defined range of years
      if (newYear < 2010) return 2010;
      if (newYear > 2024) return 2024;
      return newYear;
    });
  };

  // Directly select the history data of the selected year
  const currentHistory = historyData.find(data => data.year === selectedYear);

  return (
    <div className='about-history-section'>
      <Container>
        <div className='history-section'>
          <h2>History</h2>
          <p>The Alliance brand was born in 2010. With its headquarters in Melbourne</p>
        </div>
        <Row>
          <Col lg='5'>
            <div className='history-image'>
              {/* Display the current image */}
              {currentHistory && (
                <img src={currentHistory.image} width="100%" alt={`History ${currentHistory.year}`} />
              )}
            </div>
          </Col>
          <Col lg='1'>
            <div className='years'>
              {/* List of years */}
              {historyData.map((data) => (
                <p
                  key={data.year}
                  onClick={() => setSelectedYear(data.year)}  // Update state on click
                  style={{
                    cursor: 'pointer',
                    color: selectedYear === data.year ? 'yellow' : 'white',  // Highlight selected year
                  }}
                >
                  {data.year}
                </p>
              ))}
              {/* Arrows */}
              <div className='arrows'>
                <button
                  onClick={() => changeYear(-1)}  // Decrease year
                  style={{ cursor: 'pointer' }}
                >
                  ▲
                </button>
                <button
                  onClick={() => changeYear(1)}  // Increase year
                  style={{ cursor: 'pointer' }}
                >
                  ▼
                </button>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            {/* Text description changes based on the selected year */}
            {currentHistory && <p>{currentHistory.description}</p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
