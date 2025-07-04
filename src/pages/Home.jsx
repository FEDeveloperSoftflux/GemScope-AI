import React, { useState } from 'react';
import HeroContent from '../Components/Sections/Hero';
import Features from '../Components/Sections/Feature';
import AICrypto from '../Components/Sections/AICrypto';
import LifeChanging from '../Components/Sections/LifeChanging';
import FAQ from '../Components/Sections/FAQ';
import Pricing from '../Components/Sections/Pricing';
import CTA from '../Components/Sections/CTA';

const Home = ({ features, faqData, openFaqIndex, onFaqToggle, pricingPlans, onPlanSelection }) => {
  return (
    <>
      <HeroContent />
      <Features features={features} />
      <AICrypto />
      <LifeChanging />
      <FAQ 
        faqData={faqData} 
        openFaqIndex={openFaqIndex}
        onFaqToggle={onFaqToggle}
      />
      <Pricing pricingPlans={pricingPlans} onPlanSelection={onPlanSelection} />
      <CTA />
    </>
  );
};

export default Home; 