import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChoose from '../components/WhyChoose';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
