import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ContactSectionnew from '../ContactSectionnew'
import TestimonialsSection from '../TestimonialsSection'
import { Expertisesection } from '../Expertisesection'
import CaseStudySection from '../CaseStudySection'
import Techstack from '../Techstack'
import Gamehero from '../Gamehero'
import Gamechoose from '../Gamechoose'
import Gamereach from '../Gamereach'
import Gameproven from '../Gameproven'
import Gamewhy from '../Gamewhy'
import Gamecase from '../Gamecase'

const Gameappdevelopment = () => {
    return (
        <div className='services-page'>
            <Header />
            <Gamehero />
            <Gamereach />
            <Gameproven />
            <Gamechoose />
            < Techstack />
            <CaseStudySection />
            <Expertisesection />
            <Gamewhy />
            <Gamecase />
            <TestimonialsSection />
            <ContactSectionnew />
            <Footer />

        </div>
    )
}

export default Gameappdevelopment
