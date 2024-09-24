// src/components/Stats.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Stats.css';

const statsData = [
  { value: '4.8k', label: 'Job Completed' },
  { value: '12+', label: 'Industry Experience' },
  { value: '2.5k+', label: 'World wide clients' },
  { value: '120+', label: 'Won Awards' },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <Container>
        <Row className="text-center">
          {statsData.map((stat, index) => (
            <Col key={index} md={3} xs={6}>
              <span className="stat-value">{stat.value}</span>
              <p className="stat-label">{stat.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
