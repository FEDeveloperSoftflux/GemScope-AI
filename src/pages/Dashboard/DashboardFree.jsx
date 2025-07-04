import React, { useState } from 'react';
import Sidebar from '../../Components/Sections/Dashboard/Sidebar';
import DHeader from '../../Components/Sections/Dashboard/DHeader';
import WelcomeSection from '../../Components/Sections/Dashboard/Welcome';
import ActionCards from '../../Components/Sections/Dashboard/ActionCard';
import Watchlist from '../../Components/Sections/Dashboard/Watchlist';
import RightSidebar from '../../Components/Sections/Dashboard/RightBar';
import PricingCard from '../../Components/Sections/PricingCard';
import CrossButton from '../../Components/Common/CrossButton';
import CurveDao from '../../assets/CurveDAO.png';
import COTI from '../../assets/COTI.svg';
import XDC from '../../assets/XDC.svg';
import SupportModal from '../../Components/Sections/Dashboard/modal/SupportModal';

const CryptoDashboard = ({ plan, setUserPlan }) => {
  // Sample data 
  const cryptoData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$98,430', change: '+2.23%', positive: true },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,349', change: '-1.25%', positive: false },
    { name: 'Solana', symbol: 'SOL', price: '$211.46', change: '+1.86%', positive: true },
    { name: 'Cardano', symbol: 'ADA', price: '$2.39', change: '+12.2%', positive: true },
    { name: 'XRP', symbol: 'XRP', price: '$2.02', change: '+7.59%', positive: true },
    { name: 'Dogecoin', symbol: 'DOGE', price: '$0.32', change: '-2.23%', positive: false },
    { name: 'Sui', symbol: 'SUI', price: '$3.82', change: '-2.18%', positive: false },
    { name: 'Avalanche', symbol: 'AVAX', price: '$36.72', change: '+2.15%', positive: true }
  ];

  const hotTokens = [
    { name: 'XDC Network', symbol: 'XDC', change: '+281.19%', icon: XDC },
    { name: 'COTI', symbol: 'COTI', change: '+43.21%', icon: COTI },
    { name: 'Curve DAO', symbol: 'CRV', change: '+27.1%', icon: CurveDao }
  ];

  const [showPricingCard, setShowPricingCard] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [supportEmail, setSupportEmail] = useState('');
  const [supportMessage, setSupportMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
      popular: false,
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

  return (
    <div className="h-screen bg-black text-white flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 px-0 py-6 sm:px-6 overflow-y-auto">
        <DHeader plan={plan} setUserPlan={setUserPlan} />
        <WelcomeSection />
        <ActionCards onSupportClick={() => setShowSupportModal(true)} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 md:ml-10 mt-4">
          <Watchlist cryptoData={cryptoData} className="col-span-2" />
          <RightSidebar hotTokens={hotTokens} onUpgradeClick={() => setShowPricingCard(true)} className="col-span-1" />
        </div>
        {showPricingCard && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-2xl bg-opacity-60 z-50">
            <div className="bg-[#202020] rounded-2xl p-8 relative max-w-5xl w-full min-h-[600px]">
              <CrossButton onClick={() => setShowPricingCard(false)} className="absolute top-2 right-2 " />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pricingPlans.filter(plan => plan.name !== "Free Tier").map((plan, idx) => (
                  <PricingCard 
                    key={idx} 
                    {...plan} 
                    buttonTextClassName="whitespace-nowrap" 
                    width="w-[270px]" 
                    buttonSizeClasses="px-12 py-2 text-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <SupportModal
          open={showSupportModal}
          onClose={() => setShowSupportModal(false)}
          email={supportEmail}
          setEmail={setSupportEmail}
          message={supportMessage}
          setMessage={setSupportMessage}
          onSuccess={() => { setShowSupportModal(false); }}
        />
      </div>
    </div>
  );
};

export default CryptoDashboard;