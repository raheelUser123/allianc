import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const Androidhero = () => {
  return (
    <div className='service-hero-section text-left'>
      <Container>
        <h1 data-aos="fade-right">
        Dynamic Android App <br/> Development for Your Business
        </h1>
        <p data-aos="fade-left">
        Alliance is ready to help you reach millions of users with innovative, high-performance Android applications that stand out in the marketplace.
        </p>
        <Button  className="me-3 btn1" data-aos="fade-up">Let’s Build <FaLongArrowAltRight /></Button>
      </Container>
    </div>
  )
}



