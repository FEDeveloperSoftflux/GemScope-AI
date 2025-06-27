import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// Hot Token Component
const HotToken = ({ token, index }) => (
  <div className="flex items-center justify-between py-4">
    {/* Numbered Circle */}
    <div className="flex items-center w-1/4">
      <div className="flex-none w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-gray-400 font-bold text-lg mr-3">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div>
        <p className="font-medium text-white truncate font-['Schibsted_Grotesk'] text-[15px] leading-[20px]">{token.name}</p>
        <p className="text-xs text-gray-400 uppercase truncate font-['Lato']">
          ${typeof token.value === 'number' ? token.value.toLocaleString() : '0.00'}
        </p>
      </div>
    </div>
    {/* Percentage Change */}
    <div className="flex-1 flex justify-end items-center">
      <span className="flex items-center text-green-400 font-normal text-sm font-['Schibsted_Grotesk']">
        <ArrowUpRight size={16} className="mr-1" />
        {token.change}
      </span>
    </div>
  </div>
);

// What's Hot Component
const WhatsHot = ({ hotTokens }) => (
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