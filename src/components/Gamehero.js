import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Gamehero = () => {
  return (
    <div className='service-hero-section text-left'>
    <Container>
      <h1 data-aos="fade-right">
      Engaging & Immersive Game <br/> App Development Company
      </h1>
      <p data-aos="fade-left">
      From 2D to Web3, we develop gaming experience that keep the players coming for more. Build your gaming world with the team of experts. 
      </p>
      <Button  className="me-3 btn1" data-aos="fade-up">Let’s Build <FaLongArrowAltRight /></Button>
    </Container>
  </div>
  )
}

export default Gamehero






