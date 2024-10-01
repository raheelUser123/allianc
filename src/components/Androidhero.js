import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const Androidhero = () => {
  return (
    <div className='service-hero-section text-left'>
      <Container data-aos="fade-right">
        <h1>
        Dynamic Android App <br/> Development for Your Business
        </h1>
        <p>
        Alliance is ready to help you reach millions of users with innovative, high-performance <br/> Android applications that stand out in the marketplace.
        </p>
        <div className='center-button'>
     <Button  className="me-3 btn1">Let’s Build <FaLongArrowAltRight /></Button>
     </div>
      </Container>
    </div>
  )
}



