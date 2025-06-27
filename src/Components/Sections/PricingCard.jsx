import React from 'react';
import Tick from '../../assets/Tick.svg';
import Card from '../Common/Card';
import Button from '../Common/Button';

const PricingCard = ({ 
  name,
  price,
  period,
  features = [],
  popular = false,
  color = '',
  className = '',
  onSelectPlan,
  iconBg = '',
  ...props 
}) => {
  return (
    <div className={`relative`}>
      <Card 
        className={`h-[540px] ${color} flex flex-col`}
        hover={true}
        {...props}
      >
        {/* Header */}
        <div className="text-left mb-6">
          <h3 className="font-['Lato'] font-weight-400 text-[16px] mb-2 text-white/80 ">{name}</h3>
          <div className="mb-2 flex items-end">
            <span className="text-[20px] text-white/80  mb-1 font-['Lato']">£</span>
            <span className="text-5xl font-bold text-white leading-none font-['Lato']">{price}</span>
            <span className="text-base text-white/60 ml-2 mb-1font-['Lato']"> / {period}</span>
          </div>
        </div>
        
        {/* Features - flexible height */}
        <div className="flex-1 flex flex-col">
          <ul className="space-y-3 mb-8 flex-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-left text-sm">
                <div className={`w-5 h-5 flex items-center justify-center rounded-full mr-3 ${iconBg}`}>
                  <img src={Tick} alt="Tick" className="w-3 h-3" />
                </div>
                <span className="text-white">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Button - fixed at bottom */}
          <div className="flex justify-center">
            <Button
              className="px-5 font-['Lato'] font-weight-700 text-[16px] leading-[26px] tracking-[-0.4px] plan-shadow"
            >
              Get This Plan
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PricingCard;