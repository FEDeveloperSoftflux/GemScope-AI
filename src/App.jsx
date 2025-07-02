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
import Dashboard from './pages/Dashboard';
import DashboardPro from './pages/DashboardPro';
import DashboardEnterprise from './pages/DashboardEnterprise';
import ActivateAI from './pages/ActivateAI';
import ActivateAIPro from './pages/ActivateaiPro';
import ActivateAIEnterprise from './pages/ActivateaiEnterprise';
import History from './pages/History';
import Billing from './pages/Billing';
import Account from './pages/Account';


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
      title: "AI-Powered Integration",
      
    },
    {
      icon: <img src={Network} alt="Shield" className='w-[78px] h-[78px]' />,
      title: "High-level intel and validation assessments",
      
    },
    {
      icon: <img src={Shield} alt="Network" className='w-[78px] h-[78px]' />,
      title: "Real-time project & market updates",
      
    }
  ];

  // Pricing data
  const pricingPlans = [
    {
      name: "Free Tier",
      price: "0",
      period: "Month",
      features: [
        "Project Tokenomics",
        "3 AI Prompt Searches/Month",
      ],
      color: "bg-[linear-gradient(360deg,_#F5DBE0_-21.35%,_#C32388_104.32%)]",
      popular: false,
      iconBg :"bg-pink-400/40"
    },
    {
      name: "Pro Tier",
      price: "20",
      period: "Month",
      features: [
        "Everything in Free +",
        "Social Engagement Scores",
        "5 Exchange Listing Options",
        "CEX & DEX Liquidity Volume",
        "Code Base Reddit Link Summary",
        "30 AI Prompt Searches/Month",
      ],
      color: "bg-[linear-gradient(180deg,_#7F00CE_-4.81%,_#EED4FF_125.36%)]",
      popular: false,
      iconBg :"bg-purple-400/40"
    },
    {
      name: "Enterprise Tier",
      price: "50",
      period: "Month",
      features: [
        "Everything In Pro +",
        "Team Analysis",
        "Bot Detection",
        "Developer Activity",
        "AI Whitepaper Analysis",
        "Gem Score + AI Summary",
        "Red Flag Risk Score + AI Concern Report",
        "Unlimited AI Prompt Searches/Month.",
        "Dashboard Features"
        
      ],
      color: "bg-[linear-gradient(180.57deg,_#0808FF_-4.69%,_#4EBBFF_130.44%)]",
      popular: true,
      iconBg :"bg-blue-400/40"
      
    },
    {
      name: "Lifetime Enterprise Tier",
      price: "150",
      period: "Lifetime",
      features: [
        "A Lifetime Of Enterprise Services",
        "One Off Payment",
        "Saves You Money + Instant Access"
      ],
      color: "bg-[linear-gradient(179.59deg,_#C4A502_-5.34%,_#FFF3B6_114.16%)]",
      popular: false,
      iconBg :"bg-yellow-400/40"
    }
  ];

  // FAQ data
  const faqData = [
    {
      question: "What is GemScope AI?",
      answer: "GemScope AI is a platform that uses AI to assess and uncover undervalued or unknown crypto projects, providing detailed scores and summaries. It is also a tool to analyse your favourite coins to retrieve never before seen data so you can get the best investment insights"
    },
    {
      question: "How does the AI analysis work?",
      answer: "We use AI to evaluate various aspects of crypto projects, including their potential, authenticity, and risks, presenting the findings in an easy-to-understand format."
    },
    {
       question: "Which crypto data sources are used?",
       answer: "Our AI gathers data from CoinGecko, Luna Crush, DexTools, Reddit, and other trusted sources to ensure comprehensive analysis.",
    },
    {  
    question: "Is there a free version available?",
    answer: "Yes, we offer a free tier that includes basic analysis features for users to get started."
    },
    {
      question: "Can I change my subscription tier?",
      answer: "Absolutely, you can upgrade or downgrade your subscription at any time through your account settings."
    }
  ];

  // State for FAQ toggle - tracks which FAQ item is currently open
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [userPlan, setUserPlan] = useState("free");

  // Handle FAQ toggle - only one FAQ can be open at a time
  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handlePlanSelection = (planName) => {
    console.log(`Selected plan: ${planName}`);
    // Handle plan selection logic here
  };

  return (
    <div className="min-h-screen bg-black  ">
      {location.pathname !== '/login' && location.pathname !== '/create-account' && location.pathname !== '/verification' && location.pathname !== '/dashboard' && location.pathname !== '/activate-ai' && location.pathname !== '/history' && location.pathname !== '/billing' && location.pathname !== '/account' && <Header />}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <HeroContent />
              <Features features={features} />
              <AICrypto  />
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
          <Route path="/dashboard" element={
            userPlan === "pro" ? (
              <DashboardPro plan={userPlan} setUserPlan={setUserPlan} />
            ) : userPlan === "enterprise" ? (
              <DashboardEnterprise plan={userPlan} setUserPlan={setUserPlan} />
            ) : (
              <Dashboard plan={userPlan} setUserPlan={setUserPlan} />
            )
          } />
          <Route path="/activate-ai" element={
            userPlan === "pro" ? (
              <ActivateAIPro plan={userPlan} setUserPlan={setUserPlan} />
            ) : userPlan === "enterprise" ? (
              <ActivateAIEnterprise plan={userPlan} setUserPlan={setUserPlan} />
            ) : (
              <ActivateAI plan={userPlan} setUserPlan={setUserPlan} />
            )
          } />
          <Route path="/history" element={<History plan={userPlan} setUserPlan={setUserPlan} />} />
          <Route path="/billing" element={<Billing plan={userPlan} setUserPlan={setUserPlan} />} />
          <Route path="/account" element={<Account plan={userPlan} setUserPlan={setUserPlan} />} />
        </Routes>
      </main>
      {location.pathname !== '/login' && location.pathname !== '/create-account' && location.pathname !== '/verification' && location.pathname !== '/dashboard' && location.pathname !== '/activate-ai' && location.pathname !== '/history' && location.pathname !== '/billing' && location.pathname !== '/account' && <Footer />}
    </div>
  );
};

export default App;