import React, { useState } from 'react';
import Sidebar from '../Components/Sections/Dashboard/Sidebar';
import DHeader from '../Components/Sections/Dashboard/DHeader';
import WelcomeSection from '../Components/Sections/Dashboard/Welcome';
import ActionCards from '../Components/Sections/Dashboard/ActionCard';
import Watchlist from '../Components/Sections/Dashboard/Watchlist';
import RightSidebar from '../Components/Sections/Dashboard/DashBoard';
import PricingCard from '../Components/Sections/PricingCard';
import CrossButton from '../Components/Common/CrossButton';

const CryptoDashboard = () => {
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
    { name: 'XDC Network', symbol: 'XDC', change: '+281.19%' },
    { name: 'COTI', symbol: 'COTI', change: '+43.21%' },
    { name: 'Curve DAO', symbol: 'CRV', change: '+27.1%' }
  ];

  const [showPricingCard, setShowPricingCard] = useState(false);

  const pricingPlans = [
    {
      name: "Free Tier",
      price: "0",
      period: "Month",
      features: [
        "Basic AI Analysis",
        "5 Coin Alerts/Month",
        "Email Support",
        "Market Overview",
        "Basic Charts"
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
        "Advanced AI Analysis",
        "Unlimited Alerts",
        "Priority Support",
        "Risk Assessment",
        "Portfolio Tracking",
        "API Access",
        "Custom Indicators"
      ],
      color: "bg-[linear-gradient(180deg,_#7F00CE_-4.81%,_#EED4FF_125.36%)]",
      popular: false,
      iconBg :"bg-purple-400/40"
    },
    {
      name: "Elite",
      price: "50",
      period: "Month",
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
      popular: false,
      iconBg :"bg-blue-400/40"
      
    },
    {
      name: "Institution",
      price: "150",
      period: "Lifetime",
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
      popular: false,
      iconBg :"bg-yellow-400/40"
    }
  ];

  return (
    <div className="h-screen bg-black text-white flex">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-y-auto">
        <DHeader />
        <WelcomeSection />
        <ActionCards />
        
        <div className="grid grid-cols-3 gap-6 ml-10">
          <Watchlist cryptoData={cryptoData} />
          <RightSidebar hotTokens={hotTokens} onUpgradeClick={() => setShowPricingCard(true)} />
        </div>
        {showPricingCard && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-2xl bg-opacity-60 z-50">
            <div className="bg-[#202020] rounded-2xl p-14 lg:pr-24 relative max-w-7xl w-full min-h-[600px]">
              <CrossButton onClick={() => setShowPricingCard(false)} className="absolute top-4 right-4 z-10" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pricingPlans.map((plan, idx) => (
                  <PricingCard key={idx} {...plan} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div> 
    </div>
  );
};

export default CryptoDashboard;