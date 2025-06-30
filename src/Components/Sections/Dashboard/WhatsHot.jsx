import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CurveDao from '../../../assets/Bitcoin.svg';
import COTI from '../../../assets/COTI.svg';
import XDC from '../../../assets/XDC.svg';
import TrendUp from '../../../assets/Trendup.svg'

// Hardcoded hot tokens data
const hotTokens = [
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
const HotToken = ({ token, index }) => (
  <div className="flex items-center justify-between py-4">
    {/* Token SVG Icon */}
    <div className="flex items-center w-1/4">
      <div className="flex-none w-10 h-10 flex items-center justify-center rounded-full  mr-3">
        <img src={token.icon} alt={token.name} className="w-8 h-8" />
      </div>
      <div>
        <p className="font-semibold text-white  font-['Schibsted_Grotesk'] text-[15px] leading-[20px]">{token.name}</p>
        <p className="text-xs text-gray-400 uppercase truncate font-['Lato']">
          ${typeof token.value === 'number' ? token.value.toLocaleString() : '0.00'}
        </p>
      </div>
    </div>
    {/* Percentage Change */}
    <div className="flex-1 flex justify-end items-center">
      <span className="flex items-center text-green-400 font-normal text-sm font-['Schibsted_Grotesk']">
        <img src={TrendUp} alt="trend up" className="w-2 h-2 mr-1" />
        {token.change}
      </span>
    </div>
  </div>
);

// What's Hot Component
const WhatsHot = () => (
  <div className="bg-[#18191C] rounded-2xl p-6 shadow-md max-w-md mx-auto">
    <h3 className="font-bold text-[25px] text-white mb-6 text-left font-['Schibsted_Grotesk'] font-weight-500">What's Hot? <span role="img" aria-label="fire">🔥</span></h3>
    <div>
      {hotTokens.map((token, index) => (
        <React.Fragment key={index}>
          <HotToken token={token} index={index} />
          {index !== hotTokens.length - 1 && <hr className="border-gray-700 my-0" />}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default WhatsHot;