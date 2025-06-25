import React, { useState } from 'react';
import AI from './assets/AI.svg';
import Network from './assets/Network.svg';
import Shield from './assets/Shield.svg';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import AICrypto from './Components/Sections/AICrypto';
import LifeChanging from './Components/Sections/LifeChanging';
import FAQ from './Components/Sections/FAQ';
import Pricing from './Components/Sections/Pricing';
import CTA from './Components/Sections/CTA';
import Features from './Components/Sections/Feature';
import HeroContent from './Components/Sections/Hero';
import PrivacyPolicy from './Components/Sections/PrivacyPolicy';
import TermsAndCondition from './Components/Sections/Terms&Condition';
import Login from './Components/Sections/Login';
import CreateAccount from './Components/Sections/CreateAccount';
import Verification from './Components/Sections/Verification';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Features data
  const features = [
    {
      icon: <img src={AI} alt="AI" className='w-[78px] h-[78px]'/>,
      title: "AI-Powered Analysis",
      
    },
    {
      icon: <img src={Shield} alt="Shield" className='w-[78px] h-[78px]' />,
      title: "High-level intel and validation assessments",
      
    },
    {
      icon: <img src={Network} alt="Network" className='w-[78px] h-[78px]' />,
      title: "Real-time Alerts & market updates",
      
    }
  ];

  // Pricing data
  const pricingPlans = [
    {
      name: "Starter",
      price: "0",
      period: "Free Forever",
      features: [
        "Basic AI Analysis",
        "5 Coin Alerts/Month",
        "Email Support",
        "Market Overview",
        "Basic Charts"
      ],
      color: "bg-[linear-gradient(360deg,_#F5DBE0_-21.35%,_#C32388_104.32%)]",
      popular: false
    },
    {
      name: "Pro",
      price: "29",
      period: "per month",
      features: [
        "Advanced AI Analysis",
        "Unlimited Alerts",
        "Priority Support",
        "Risk Assessment",
        "Portfolio Tracking",
        "API Access",
        "Custom Indicators"
      ],
      color: "bg-[linear-gradient(180deg,_#7F00CE_-4.81%,_#EED4FF_125.36%)]",
      popular: false
    },
    {
      name: "Elite",
      price: "99",
      period: "per month",
      features: [
        "Premium AI Models",
        "Real-time Analysis",
        "1-on-1 Consultation",
        "Advanced Risk Models",
        "Multi-Exchange Support",
        "Custom Strategies",
        "Backtesting Tools",
        "White-label Solution"
      ],
      color: "bg-[linear-gradient(180.57deg,_#0808FF_-4.69%,_#4EBBFF_130.44%)]",
      popular: false
    },
    {
      name: "Institution",
      price: "299",
      period: "per month",
      features: [
        "Enterprise AI Suite",
        "Dedicated Support",
        "Custom Integration",
        "Advanced Analytics",
        "Team Management",
        "SLA Guarantee",
        "Custom Training",
        "Regulatory Compliance"
      ],
      color: "bg-[linear-gradient(179.59deg,_#C4A502_-5.34%,_#FFF3B6_114.16%)]",
      popular: false
    }
  ];

  // FAQ data
  const faqData = [
    {
      question: "What is GemScope AI?",
      answer: "GemScope AI is an advanced cryptocurrency analysis platform that uses artificial intelligence to identify high-potential investment opportunities before they become mainstream. Our proprietary algorithms analyze market data, social sentiment, and on-chain metrics to give you the edge in crypto trading."
    },
    {
      question: "How does the AI analysis work?",
      answer: "Our AI algorithms analyze thousands of data points including price movements, trading volume, social sentiment, on-chain metrics, and market patterns. We use advanced machine learning models trained on historical data to identify potential opportunities and assess risk levels for different cryptocurrency investments."
    },
    {
      question: "Is there a free version available?",
      answer: "Yes, we offer a free starter plan that includes basic AI analysis and limited alerts to help you get started with our platform. This allows you to experience our technology before upgrading to a paid plan for more advanced features."
    },
    {
      question: "Can I integrate with my exchange?",
      answer: "Yes, we support secure API integration with major cryptocurrency exchanges including Binance, Coinbase Pro, Kraken, and many others. This allows for seamless portfolio tracking and automated trading capabilities while maintaining the highest security standards."
    },
    {
      question: "How accurate are the AI predictions?",
      answer: "While past performance doesn't guarantee future results, our AI models have shown strong performance in backtesting and live trading scenarios. We provide confidence levels with each prediction and encourage users to combine our insights with their own research and risk management strategies."
    }
  ];

  // State for FAQ toggle - tracks which FAQ item is currently open
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Handle FAQ toggle - only one FAQ can be open at a time
  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handlePlanSelection = (planName) => {
    console.log(`Selected plan: ${planName}`);
    // Handle plan selection logic here
  };

  return (
    <div className="min-h-screen bg-black ">
      {location.pathname !== '/login' && location.pathname !== '/create-account' && location.pathname !== '/verification' && <Header />}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <HeroContent />
              <Features features={features} />
              <AICrypto />
              <LifeChanging />
              <FAQ 
                faqData={faqData} 
                openFaqIndex={openFaqIndex}
                onFaqToggle={handleFaqToggle}
              />
              <Pricing pricingPlans={pricingPlans} onPlanSelection={handlePlanSelection} />
              <CTA />
            </>
          } />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndCondition />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
      </main>
      {location.pathname !== '/login' && location.pathname !== '/create-account' && location.pathname !== '/verification' && <Footer />}
    </div>
  );
};

export default App;