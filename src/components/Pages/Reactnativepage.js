import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ContactSectionnew from '../ContactSectionnew'
import TestimonialsSection from '../TestimonialsSection'
import { Expertisesection } from '../Expertisesection'
import CaseStudySection from '../CaseStudySection'
import Techstack from '../Techstack'
import Nativehero from '../Nativehero'
import Nativerevolution from '../Nativerevolution'
import Nativenumbers from '../Nativenumbers'
import Nativechoose from '../Nativechoose'
import Nativewhy from '../Nativewhy'
import Nativecase from '../Nativecase'

const Reactnativepage = () => {
    return (
        <div className='services-page'>
            <Header />
            <Nativehero />
            <Nativerevolution />
            <Nativenumbers />
            <Nativechoose />
            <Techstack />
            <CaseStudySection />
            <Expertisesection />
            < Nativewhy />
            <Nativecase />
            <TestimonialsSection />
            <ContactSectionnew />
            <Footer />

        </div>
    )
}

export default Reactnativepage
