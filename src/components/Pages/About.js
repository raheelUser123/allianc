import React from 'react'
import Footer from '../Footer'
import ContactSection from '../ContactSection'
import TestimonialsSection from '../TestimonialsSection'
import Header from '../Header'
import Aboutherosection from '../Aboutherosection'
import { Abouthistory } from '../Abouthistory'

const About = () => {
  return (
    <div className='about-page'>
    <Header />
    <Aboutherosection/>
    <Abouthistory/>
    <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default About
