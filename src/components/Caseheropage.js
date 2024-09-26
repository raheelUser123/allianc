import React from 'react'
import { Button } from 'react-bootstrap'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Caseheropage = () => {
  return (
    <div className='case-hero-section text-center'>
    <h1 className='text-center'>Case Study</h1>
    <p>
    Looking to develop a cutting-edge iOS app to meet your business demands? Alliance, a renowned iOS app <br/> development company, is your go-to destination for creating and launching your next-gen iPhone app with state- <br/>of-the-art technologies.
    </p>
    <Button  className="me-3 btn1">Case Study <FaLongArrowAltRight /></Button>
</div>
  )
}

export default Caseheropage
