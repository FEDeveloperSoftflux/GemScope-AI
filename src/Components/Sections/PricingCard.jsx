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
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <div className="mb-2">
            <span className="text-4xl font-bold text-white">${price}</span>
          </div>
          <p className="text-gray-400 text-sm">{period}</p>
        </div>
        
        {/* Features - flexible height */}
        <div className="flex-1 flex flex-col">
          <ul className="space-y-3 mb-8 flex-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-left text-sm">
                <img src={Tick} alt="Tick" className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-white">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Button - fixed at bottom */}
          <div className="flex justify-center">
            <Button size="md">Start Free Trial</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PricingCard;