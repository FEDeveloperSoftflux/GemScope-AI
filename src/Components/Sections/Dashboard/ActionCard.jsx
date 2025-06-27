import React from 'react';
import { Settings, Eye, Download, HelpCircle } from 'lucide-react';
import Background1 from '../../../assets/Background.png';

// Action Card Component
const ActionCard = ({ title, description, icon: Icon, badgeText }) => (
  <div
    className={"rounded-xl p-4  sm:h-48 lg:h-35 relative overflow-hidden cursor-pointer  transition-opacity hove:translate-y-1"}
    style={{ backgroundImage: `url(${Background1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="absolute top-2 right-2 text-xs bg-black/20 px-2 py-1 rounded">
      {badgeText}
    </div>
    <div className="text-white mb-2">
      <Icon size={24} />
    </div>
    <h3 className="font-semibold mb-1 text-white text-1xl font-['Schibsted_Grotesk']">{title}</h3>
    <p className="text-[12px] text-white/80 font-['Lato' mr-10 font-weight-500]">{description}</p>
  </div>
);

// Action Cards Grid Component
const ActionCards = () => {
  const cards = [
    {
      title: 'Activate AI',
      description: 'Discover and analyse Crypto using AI insights',
      icon: Settings,
    },
    {
      title: 'View History',
      description: ' Revisit your analysis history',
      icon: Eye,
    },
    {
      title: 'Download Reports',
      description: 'Export your prompt analysis',
      icon: Download,
    },
    {
      title: 'Support',
      description: 'Need Assistance? we’re here to help',
      icon: HelpCircle,
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 ml-0 sm:ml-4 lg:ml-10 ">
      {cards.map((card, index) => (
        <ActionCard key={index} {...card} />
      ))}
    </div>
  );
};

export default ActionCards;