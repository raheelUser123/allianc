import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ContactSection from '../ContactSectionnew'
import TestimonialsSection from '../TestimonialsSection'
import CaseStudySection from '../CaseStudySection'
import Caseheropage from '../Caseheropage'
import { Expertisesection } from '../Expertisesection'
import Faqsection from '../Fcase'

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
            <Faqsection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default Casestudy
