
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Flutterhero = () => {
  return (
         <div className='service-hero-section text-left'>
    <Container data-aos="fade-right">
      <h1>
      Get Cross-Platform App <br /> Development with Flutter
      </h1>
      <p >
      Reducing development time and cost with Flutter for seamless and high-performance apps. 
      </p>
     <div className='center-button'>
     <Button  className="me-3 btn1">Let’s Build <FaLongArrowAltRight /></Button>
     </div>
    </Container>
  </div>
  )
}

export default Flutterhero







