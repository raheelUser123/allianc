import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Nativehero = () => {
  return (
    <div className='service-hero-section text-left'>
    <Container>
      <h1 data-aos="fade-right">
      Making Apps Super-optimized, Cost-effective, & Time-efficient with React Native 
      </h1>
      <p data-aos="fade-left">
      Reach more users with a single, high-performance app across both iOS and Android using React Native.
      </p>
      <Button  className="me-3 btn1" data-aos="fade-up">Let’s Build <FaLongArrowAltRight /></Button>
    </Container>
  </div>
  )
}

export default Nativehero







