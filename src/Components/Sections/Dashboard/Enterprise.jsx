import React from 'react';
import Lock from '../../../assets/Lock.svg';
import BackgroundImg from '../../../assets/Background.png';

const EnterpriseUpgrade = ({ onUpgradeClick }) => (
  <div
    className="rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden shadow-xl border border-gray-900 
    w-[calc(100%-2rem)] sm:w-full h-full min-h-[300px] flex flex-col justify-between mx-4 sm:mx-0"
    style={{
      backgroundImage: `url(${BackgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Background overlay for better text readability */}
    <div className="absolute inset-0 bg-black/20" />
    
    {/* Content container */}
    <div className="relative z-10 flex flex-col h-full justify-between min-h-0">
      
      {/* Header section */}
      <div className="flex-shrink-0">
        <div className="mb-4 sm:mb-6 w-full flex justify-start">
          <img 
            src={Lock} 
            alt="Lock" 
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 drop-shadow-lg border-2 border-white/50 rounded-lg p-1 sm:p-2" 
          />
        </div>
        
        <h3 className="font-medium mb-1 sm:mb-2 text-left text-white text-sm sm:text-base lg:text-lg xl:text-xl 
        drop-shadow w-full font-['Schibsted_Grotesk'] leading-tight">
          Unlock Full Insights With Enterprise
        </h3>
        
        <p className="text-xs sm:text-sm lg:text-base text-gray-200 text-left drop-shadow w-full 
        font-['Lato'] leading-relaxed">
          Unleash the full power of AI.
        </p>
      </div>

      {/* Spacer for flexible content area */}
      <div className="flex-grow min-h-4" />
      
      {/* Button section */}
      <div className="flex-shrink-0 w-full">
        <button
          className="relative px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg 
          font-medium text-black bg-gradient-to-r from-purple-400 via-white to-pink-300 
          rounded-xl shadow-black/30 drop-shadow-lg transform transition-all duration-300 
          ease-in-out hover:scale-105 active:scale-95 font-['Schibsted_Grotesk'] 
          shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)] 
          w-full whitespace-nowrap"
          onClick={onUpgradeClick}
        >
          Upgrade Now
        </button>
      </div>
    </div>
  </div>
);

export default EnterpriseUpgrade;