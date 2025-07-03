import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CurveDao from '../../../assets/CurveDAO.png';
import COTI from '../../../assets/COTI.svg';
import XDC from '../../../assets/XDC.svg';
import TrendUp from '../../../assets/Trendup.svg';

// Hardcoded hot tokens data
const defaultHotTokens = [
  {
    name: 'CurveDAO',
    value: 1.23,
    change: '+5.67%',
    icon: CurveDao,
  },
  {
    name: 'COTI',
    value: 0.45,
    change: '+3.21%',
    icon: COTI,
  },
  {
    name: 'XDC',
    value: 0.032,
    change: '+8.90%',
    icon: XDC,
  },
];

// Hot Token Component
const HotToken = ({ token }) => (
  <div className="flex items-center justify-between py-3 sm:py-4 flex-wrap gap-2">
    {/* Token Icon & Name */}
    <div className="flex items-center w-full sm:w-1/2 md:w-1/3">
      <div className="flex-none w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full mr-3">
        <img src={token.icon} alt={token.name} className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      <div>
        <p className="font-semibold text-white font-['Schibsted_Grotesk'] text-sm sm:text-[15px] leading-[20px]">{token.name}</p>
        <p className="text-[11px] sm:text-xs text-gray-400 uppercase truncate font-['Lato']">
          ${typeof token.value === 'number' ? token.value.toLocaleString() : '0.00'}
        </p>
      </div>
    </div>

    {/* Percentage Change */}
    <div className="flex-1 flex justify-end items-center sm:justify-end">
      <span className="flex items-center text-green-400 font-normal text-xs sm:text-sm font-['Schibsted_Grotesk']">
        <img src={TrendUp} alt="trend up" className="w-2 h-2 mr-1" />
        {token.change}
      </span>
    </div>
  </div>
);

// What's Hot Component
const WhatsHot = ({ hotTokens }) => {
  const tokens = hotTokens && hotTokens.length > 0 ? hotTokens : defaultHotTokens;

  return (
    <div className="bg-[#18191C] rounded-2xl p-4 sm:p-6 shadow-md w-full lg:max-w-2xl lg:mx-auto">
      <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white mb-4 sm:mb-6 text-left font-['Schibsted_Grotesk']">
        What's Hot? <span role="img" aria-label="fire">🔥</span>
      </h3>
      <div>
        {tokens.map((token, index) => (
          <React.Fragment key={index}>
            <HotToken token={token} />
            {index !== tokens.length - 1 && <hr className="border-gray-700 my-2" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WhatsHot;
