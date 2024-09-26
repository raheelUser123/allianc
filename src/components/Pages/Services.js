import React from 'react'
import Header from '../Header'
import Faqsection from '../Fcase'
import TestimonialsSection from '../TestimonialsSection'
import ContactSection from '../ContactSection'
import Footer from '../Footer'
import { Expertisesection } from '../Expertisesection'
import CaseStudySection from '../CaseStudySection'
import Servicehero from '../Servicehero'
import { Revolutionsec } from '../Revolutionsec'
import Numbers from '../Numbers'
import { IOSdevelopment } from '../IOSdevelopment'
import Techstack from '../Techstack'
import { Whatmakes } from '../Whatmakes'

const Services = () => {
    return (
        <div className='services-page'>
            <Header />
            <Servicehero />
            <Revolutionsec />
            <Numbers />
            <IOSdevelopment />
            <Techstack />
            <CaseStudySection />
            <Expertisesection />
            <Whatmakes />
            <Faqsection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default Services
