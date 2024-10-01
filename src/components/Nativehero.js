import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Nativehero = () => {
  return (
    <div className='service-hero-section text-left'>
    <Container data-aos="fade-right">
      <h1>
      Making Apps Super-optimized, Cost-effective, & Time-efficient with React Native 
      </h1>
      <p>
      Reach more users with a single, high-performance app across both iOS and Android using React Native.
      </p>
      <div className='center-button'>
     <Button  className="me-3 btn1" >Let’s Build <FaLongArrowAltRight /></Button>
     </div>
    </Container>
  </div>
  )
}

export default Nativehero







