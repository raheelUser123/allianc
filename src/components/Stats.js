import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

const statsData = [
  { value: 4800, label: 'Job Completed' },
  { value: 12, label: 'Industry Experience' },
  { value: 2500, label: 'World wide clients' },
  { value: 120, label: 'Won Awards' },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <Container>
        <Row className="text-center">
          {statsData.map((stat, index) => (
            <Col key={index} md={3} xs={6}>
              <span className="stat-value">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix={stat.label.includes('Industry Experience') ? '+' : ''}
                />
              </span>
              <p className="stat-label">{stat.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
