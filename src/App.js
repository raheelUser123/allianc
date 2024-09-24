// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EmpowerSection from './components/EmpowerSection';  // Import the EmpowerSection
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudySection from './components/CaseStudySection';
import AwardsSection from './components/AwardsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <EmpowerSection />  {/* Add EmpowerSection here */}
      <ServicesSection />
      <WhyChooseUs />
      <CaseStudySection />
      <AwardsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

export default App;
