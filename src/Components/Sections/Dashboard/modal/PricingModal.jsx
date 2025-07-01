import React from 'react';
import PricingCard from '../../PricingCard';
import CrossButton from '../../Common/CrossButton';

const PricingModal = ({ show, onClose, pricingPlans }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-2xl bg-opacity-60 z-50">
      <div className="bg-[#202020] rounded-2xl p-8 relative max-w-5xl w-full min-h-[600px]">
        <CrossButton onClick={onClose} className="absolute top-2 right-2 " />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
  );
};

export default PricingModal; 