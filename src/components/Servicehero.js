import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Servicehero = () => {
  return (
    <div className='service-hero-section text-left'>
      <Container>
        <h1>
        Top iOS Mobile App <br/> Development Services
        </h1>
        <p>
        Looking to develop a cutting-edge iOS app to meet your business demands? Alliance, a renowned iOS app development company, is your go-to destination for creating and launching your next-gen iPhone app with state-of-the-art technologies.
        </p>
        <Button  className="me-3 btn1">Case Study <FaLongArrowAltRight /></Button>
      </Container>
    </div>
  )
}

export default Servicehero
