import React from 'react';
import Header from '../Header';
import HeroSection from '../HeroSection';
import EmpowerSection from '../EmpowerSection';
import ServicesSection from '../ServicesSection';
import WhyChooseUs from '../WhyChooseUs';
import CaseStudySection from '../CaseStudySection';
import AwardsSection from '../AwardsSection';
import TestimonialsSection from '../TestimonialsSection';
import ContactSection from '../ContactSectionnew';
import Footer from '../Footer';

function Home() {
  return (
    <div class="home">
      <Header />
      <HeroSection />
      <EmpowerSection />
      <ServicesSection />
      <WhyChooseUs />
      <CaseStudySection />
      <AwardsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
