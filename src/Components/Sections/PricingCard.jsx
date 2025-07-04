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
  buttonTextClassName = '',
  width = 'w-[300px]',
  buttonSizeClasses = "px-18 py-3 text-[16px]",
  fromBilling = false,
  ...props 
}) => {
  return (
    <div className={`relative flex justify-center`}>
      <Card 
        className={`${width} h-[600px] rounded-[20px] ${color} flex flex-col ${className}`}
        hover={true}
        {...props}
      >
        {popular && (
          <div className={fromBilling
            ? "absolute top-4 right-4 bg-blue-700 text-white text-xs px-2 py-1 rounded-full font-semibold z-20 backdrop-blur-md font-['Lato']"
            : "absolute top-4 ml-40 bg-white/20 text-white px-5 py-2 rounded-full text-[10px] font-medium shadow-md z-20 backdrop-blur-md font-['Lato']"
          }>
            Most popular
          </div>
        )}
        {/* Header */}
        <div className="text-left mb-6">
          <h3 className="font-['Lato'] font-weight-400 text-[16px] mb-2 text-white/80 ">{name}</h3>
          <div className="mb-2 flex items-end">
            <span className="text-[20px] text-white/80  mb font-['Lato']">£</span>
            <span className="text-5xl font-bold text-white leading-none font-['Lato'] ml-2">{price}</span>
            <span className="text-base text-white/60 ml-2 mb-1font-['Lato']"> / {period}</span>
          </div>
        </div>
        
        {/* Features - flexible height */}
        <div className="flex-1 flex flex-col">
          <ul className="space-y-3 mb-8 flex-1 mr-2">
            {features.map((feature, index) => (
              <li key={index} className="relative text-sm pl-8">
                <div className={`absolute left-0 top-[2px] w-5 h-5 flex items-center justify-center rounded-full ${iconBg}`}>
                  <img src={Tick} alt="Tick" className="w-[12px] h-[12px]" />
                </div>
                <span className="text-white/80 font-['Lato']  text-[15px] leading-[18px] tracking-[-0.02em]">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Button - fixed at bottom */}
          <div className="flex justify-center">
          <button className={`relative font-medium  text-black bg-gradient-to-r from-purple-400 via-white to-pink-300 rounded-xl 
           shadow-black/30 drop-shadow-lg transform transition-all duration-300 ease-in-out active:scale-95
           font-['Schibsted_Grotesk'] shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)] ${buttonSizeClasses} ${buttonTextClassName}`}>
        Get This Plan
      </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PricingCard;