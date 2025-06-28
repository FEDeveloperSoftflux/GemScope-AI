import React from 'react';
import { Lock } from 'lucide-react';
import BackgroundImg from '../../../assets/Background.png';
import CrossButton from '../../Common/CrossButton';

const EnterpriseUpgrade = ({ onUpgradeClick }) => (
  <div
    className="rounded-2xl p-8 relative overflow-hidden shadow-xl"
    style={{
      backgroundImage: `url(${BackgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '320px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div className="absolute inset-0 " />
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <div className="mb-6 w-full flex justify-start">
        <Lock size={64} className="mb-2 text-white drop-shadow-lg" />
      </div>
      <h3 className="font-medium mb-1 text-left text-white text-lg drop-shadow w-full font-['Schibsted_Grotesk']">
        Unlock Full Insights With Enterprise
      </h3>
      <p className="text-[12px] text-gray-200 text-left mb-6 drop-shadow w-full font-['Lato']">
        Unleash the full power of AI.
      </p>

        {/* <button
          className="bg-transparent border-none outline-none text-sm font-bold w-72 px-4 py-1 rounded-md transition-all font-['Schibsted_Grotesk'] text-[15px] leading-[20px] font-weight-800"
          onClick={onUpgradeClick}
        >
          Upgrade Now
        </button> */}
    </div>
    <div className="absolute top-4 right-4 z-50">
    </div>
    <div className="absolute inset-0 pointer-events-none" />
  </div>
);

export default EnterpriseUpgrade;