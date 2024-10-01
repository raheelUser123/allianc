import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Servicehero = () => {
  return (
    <div className='service-hero-section text-left'>
      <Container data-aos="fade-right">
        <h1>
        Innovative iOS App <br/> Development for Businesses
        </h1>
        <p>
        Building seamless, scalable, and engaging iOS applications that elevate your business to new heights.
        </p>
       <div className='center-button'>
       <Button  className="me-3 btn1">Let’s Build <FaLongArrowAltRight /></Button>
       </div>
      </Container>
    </div>
  )
}

export default Servicehero
