import React, { useState } from 'react';
import Sidebar from '../Components/Sections/Dashboard/Sidebar';
import DHeader from '../Components/Sections/Dashboard/DHeader';
import WelcomeSection from '../Components/Sections/Dashboard/Welcome';
import ActionCards from '../Components/Sections/Dashboard/ActionCard';
import Watchlist from '../Components/Sections/Dashboard/Watchlist';
import RightSidebar from '../Components/Sections/Dashboard/RightBar';
import PricingCard from '../Components/Sections/PricingCard';
import CrossButton from '../Components/Common/CrossButton';
import CurveDao from '../assets/CurveDAO.png';
import COTI from '../assets/COTI.svg';
import XDC from '../assets/XDC.svg';
import WhatsHot from '../Components/Sections/Dashboard/WhatsHot';

const CryptoDashboard = ({ plan = "free", setUserPlan }) => {
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
    { name: 'Curve DAO', symbol: 'CRV', change: '+27.1%', icon: CurveDao },
    { name: 'Ethereum', symbol: 'ETH', change: '+12.5%', icon: COTI },
    { name: 'Solana', symbol: 'SOL', change: '+8.9%', icon: XDC },
    { name: 'Cardano', symbol: 'ADA', change: '+7.3%', icon: CurveDao },
    { name: 'Ethereum', symbol: 'ETH', change: '+12.5%', icon: COTI },
    { name: 'Solana', symbol: 'SOL', change: '+8.9%', icon: XDC },
    { name: 'Cardano', symbol: 'ADA', change: '+7.3%', icon: CurveDao }
  ];



 

  return (
    <div className="h-screen bg-black text-white flex">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-y-auto">
      <DHeader plan={plan} setUserPlan={setUserPlan} />
        <WelcomeSection />
        <ActionCards />
        
        <div className="grid grid-cols-3 gap-6 ml-10">
          <Watchlist cryptoData={cryptoData} />
          <div className="w-90 h-[800px]"><WhatsHot hotTokens={hotTokens} /></div>
        </div>
      </div> 
    </div>
  );
};

export default CryptoDashboard;