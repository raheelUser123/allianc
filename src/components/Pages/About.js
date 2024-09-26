import React from 'react'
import Footer from '../Footer'
import ContactSection from '../ContactSection'
import TestimonialsSection from '../TestimonialsSection'
import Header from '../Header'
import Aboutherosection from '../Aboutherosection'
import { Abouthistory } from '../Abouthistory'
import Vision from '../Vision'
import { Ourvalues } from '../Ourvalues'

const About = () => {
  return (
    <div className='about-page'>
    <Header />
    <Aboutherosection/>
    <Abouthistory/>
    <Vision/>
    <Ourvalues />
    <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default About
