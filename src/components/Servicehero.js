import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Servicehero = () => {
  return (
    <div className='service-hero-section text-left'>
      <Container>
        <h1 data-aos="fade-right">
        Innovative iOS App <br/> Development for Businesses
        </h1>
        <p data-aos="fade-left">
        Building seamless, scalable, and engaging iOS applications that elevate your business to new heights.
        </p>
        <Button  className="me-3 btn1" data-aos="fade-up">Let’s Build <FaLongArrowAltRight /></Button>
      </Container>
    </div>
  )
}

export default Servicehero
