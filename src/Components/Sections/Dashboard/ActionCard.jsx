import React from 'react';
import { Settings, Eye, Download, HelpCircle } from 'lucide-react';
import Background1 from '../../../assets/ActionBG.png';
import ActivateAI from '../../../assets/ActivateAI.svg';
import History from '../../../assets/History.svg';
import Support from '../../../assets/Support.svg'
import Downloads from '../../../assets/Downloads.svg'

// Action Card Component
const ActionCard = ({ title, description, icon: Icon, svgIcon, badgeText, onClick }) => (
  <div
    className={"rounded-xl p-4  sm:h-38 lg:h-35 relative overflow-hidden cursor-pointer  hove:translate-y-1"}
    style={{ backgroundImage: `url(${Background1})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
    onClick={onClick}
  >
    <div className="absolute top-2 right-2 text-xs bg-black/20 px-2 py-1 rounded">
      {badgeText}
    </div>
    <div className="text-white mb-2">
      {svgIcon ? (
        <span className="inline-flex items-center justify-center border border-gray-600 rounded-xl p-2">
          <img src={svgIcon} alt={title} style={{ width: 18, height: 18 }} />
        </span>
      ) : (
        Icon && <Icon size={24} />
      )}
    </div>
    <h3 className="actioncard-title">{title}</h3>
    <p className="action-description">{description}</p>
  </div>
);

// Action Cards Grid Component
const ActionCards = ({ onSupportClick }) => {
  const cards = [
    {
      title: 'Activate AI',
      description: 'Discover and analyse Crypto using AI insights',
      svgIcon: ActivateAI,
    },
    {
      title: 'View History',
      description: ' Revisit your analysis history',
      svgIcon: History,
    },
    {
      title: 'Download Reports',
      description: 'Export your prompt analysis',
      svgIcon: Downloads,
    },
    {
      title: 'Support',
      description: "Need Assistance? we're here to help",
      svgIcon: Support,
      onClick: onSupportClick,
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0 sm:ml-4 lg:ml-10">
      {cards.map((card, index) => (
        <ActionCard key={index} {...card} />
      ))}
    </div>
  );
};

export default ActionCards;