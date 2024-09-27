import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Androidhero } from '../Androidhero'
import Androidrevolution from '../Androidrevolution'
import Androiddef from '../Androiddef'
import Techstack from '../Techstack'
import CaseStudySection from '../CaseStudySection'
import { Expertisesection } from '../Expertisesection'
import Androidwhat from '../Androidwhat'
import Androidfcase from '../Androidfcase'
import Numbers from '../Numbers'
import TestimonialsSection from '../TestimonialsSection'
import ContactSectionnew from '../ContactSectionnew'

const Androiddevelopmentpage = () => {
  return (
    <div  className='services-page'>
        <Header />
        <Androidhero />
        <Androidrevolution />
        <Numbers />
        <Androiddef />
        <Techstack  />
        <CaseStudySection />
        <Expertisesection />
        <Androidwhat />
        <Androidfcase />
        <TestimonialsSection />
      <ContactSectionnew />
      <Footer />
       
    </div>
  )
}

export default Androiddevelopmentpage
