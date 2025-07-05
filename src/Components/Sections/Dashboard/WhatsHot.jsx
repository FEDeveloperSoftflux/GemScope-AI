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
  <div className="flex items-center justify-between py-2 sm:py-3 md:py-4">
    {/* Token Icon & Name */}
    <div className="flex items-center min-w-0 flex-1">
      <div className="flex-none w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full mr-2 sm:mr-3">
        <img src={token.icon} alt={token.name} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-white font-['Schibsted_Grotesk'] text-xs sm:text-sm md:text-[15px] lg:text-base leading-tight truncate">{token.name}</p>
        <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs text-gray-400 uppercase truncate font-['Lato']">
          ${typeof token.value === 'number' ? token.value.toLocaleString() : '0.00'}
        </p>
      </div>
    </div>

    {/* Percentage Change */}
    <div className="flex-none ml-2 sm:ml-3">
      <span className="flex items-center text-green-400 font-normal text-[10px] sm:text-xs md:text-sm lg:text-base font-['Schibsted_Grotesk'] whitespace-nowrap">
        <img src={TrendUp} alt="trend up" className="w-2 h-2 mr-1 flex-none" />
        {token.change}
      </span>
    </div>
  </div>
);

// What's Hot Component
const WhatsHot = ({ hotTokens }) => {
  const tokens = hotTokens && hotTokens.length > 0 ? hotTokens : defaultHotTokens;

  return (
    <div className="bg-[#18191C] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-md 
    w-[calc(100%-2rem)] sm:w-full h-full flex flex-col mx-auto mt-4 sm:mt-0">
      <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white 
      mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-left font-['Schibsted_Grotesk'] flex-shrink-0">
        What's Hot? <span role="img" aria-label="fire">🔥</span>
      </h3>
      <div className="flex-grow min-h-0 flex flex-col justify-center">
        {tokens.map((token, index) => (
          <React.Fragment key={index}>
            <HotToken token={token} />
            {index !== tokens.length - 1 && <hr className="border-gray-700 my-1 sm:my-2" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WhatsHot;