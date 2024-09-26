import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ContactSection from '../ContactSection'
import TestimonialsSection from '../TestimonialsSection'
import CaseStudySection from '../CaseStudySection'
import Caseheropage from '../Caseheropage'
import { Expertisesection } from '../Expertisesection'

const Casestudy = () => {
    return (
        <div className='case-study-page'>
            <Header />
            <Caseheropage />
            <CaseStudySection />
            <CaseStudySection />
            <CaseStudySection />
            <CaseStudySection />
            <Expertisesection   />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default Casestudy
