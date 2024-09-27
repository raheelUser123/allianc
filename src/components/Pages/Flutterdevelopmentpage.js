import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import TestimonialsSection from '../TestimonialsSection'
import Flutterhero from '../Flutterhero'
import Flutterrevolution from '../Flutterrevolution'
import Flutterproven from '../Flutterproven'
import Flutterwhychoose from '../Flutterwhychoose'
import Techstack from '../Techstack'
import CaseStudySection from '../CaseStudySection'
import { Expertisesection } from '../Expertisesection'
import Flutterwhatmakes from '../Flutterwhatmakes'
import Fluttercase from '../Fluttercase'
import ContactSectionnew from '../ContactSectionnew'

const Flutterdevelopmentpage = () => {
  return (
    <div className='services-page'>
      <Header/>
      <Flutterhero />
      <Flutterrevolution />
      <Flutterproven />
      <Flutterwhychoose />
      < Techstack />
      <CaseStudySection />
      <Expertisesection />
      <Flutterwhatmakes />
      <Fluttercase />
      <TestimonialsSection />
      <ContactSectionnew />
      <Footer />    
    </div>
  )
}

export default Flutterdevelopmentpage
