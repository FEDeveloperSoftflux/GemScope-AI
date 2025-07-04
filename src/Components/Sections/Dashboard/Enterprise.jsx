import React from 'react';
import Lock from '../../../assets/Lock.svg';
import BackgroundImg from '../../../assets/Background.png';


const EnterpriseUpgrade = ({ onUpgradeClick }) => (
  <div
    className="rounded-2xl p-8 relative overflow-hidden shadow-xl border-1 border-gray-900 w-auto lg:max-w-2xl mx-4 lg:mx-auto flex-1 flex flex-col"
    style={{
      backgroundImage: `url(${BackgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div className="absolute inset-0 " />
    <div className="relative z-10 flex flex-col items-center justify-center h-full flex-1 w-full">
      <div className="mb-6 w-full flex justify-start mt-5">
        <img src={Lock} alt="Lock" className="w-12 h-12 mb-2 drop-shadow-lg border-2 border-white/50 rounded-lg p-2" />
      </div>
      <h3 className="font-medium mb-1 text-left text-white text-[18px] drop-shadow w-full font-['Schibsted_Grotesk']">
        Unlock Full Insights With Enterprise
      </h3>
      <p className="text-[15px] text-gray-200 text-left mb-6 drop-shadow w-full font-['Lato']">
        Unleash the full power of AI.
      </p>
      <button
        className="relative px-18 py-3 text-[16px] font-medium  text-black bg-gradient-to-r from-purple-400 via-white to-pink-300 rounded-xl 
        shadow-black/30 drop-shadow-lg transform transition-all duration-300 ease-in-out active:scale-95
        font-['Schibsted_Grotesk'] shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)] mt-auto w-full max-w-xs mx-auto mb-4"
        onClick={onUpgradeClick}
      >
        Upgrade Now
      </button>
    </div>
    <div className="absolute top-4 right-4 z-50">
    </div>
  </div>
);

export default EnterpriseUpgrade;