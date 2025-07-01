import React, { useState } from 'react';
import Sidebar from '../Components/Sections/Dashboard/Sidebar';
import DHeader from '../Components/Sections/Dashboard/DHeader';
import Background from '../assets/Background.png';
import ActivateAIIcon from '../assets/ActivateAI.svg';

const promptOptions = [
  'Show me a enterprise gem',
  'Scan $BTC',
  'Find undervalued tokens',
  'Analyse $ETH data',
  'Give me a high liquidity coin',
  'Research a trending altcoin',
];

const ActivateAI = ({ plan, setUserPlan }) => {
  const [search, setSearch] = useState('');

  return (
    <div className="h-screen  text-white flex">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <DHeader title="Activate AI" icon={ActivateAIIcon} plan={plan} setUserPlan={setUserPlan} />
        <div className="mt-4 flex flex-col items-center justify-center w-full">
          <div
            className="w-full max-w-5xl rounded-3xl p-10 relative overflow-hidden shadow-lg"
            style={{
              background: `url(${Background}) center/cover no-repeat`,
              boxShadow: '0 4px 32px 0 rgba(186, 148, 255, 0.15)'
            }}
          >
            <h1 className="text-[50px] font-medium mb-4 text-white text-center font-[Schibsted_Grotesk]">
              AI Powered <span className="bg-gradient-to-r from-yellow-400 via-orange-400 via-red-400  to-red-500 bg-clip-text text-transparent">Search & Analytics</span>
            </h1>
            <p className="text-white/80 text-center mb-8 mt-4 text-lg font-['Lato] leading[28.8px]tracking-[0.18px]">Use natural language to discover and analyse cryptocurrency opportunities</p>
            <div className="relative w-[800px] h-[65px] mx-auto mb-6 ">
              <input
                type="text"
                className="w-full  h-[55px] px-4 py-2 pr-28 rounded-xl bg-[#0F0F0F] text-white border border-[#2e2e2e] placeholder-gray-400 focus:outline-none font-['Schibsted_Grotesk']"
                placeholder="Give me a Crypto coin with high investment potential..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button
                className="absolute top-[26px] right-2 transform -translate-y-1/2 px-6 py-1 rounded-xl font-semibold text-lg bg-gradient-to-r from-purple-400 via-white to-pink-300 text-black shadow-lg transition hover:scale-105"
                style={{ boxShadow: '0 4px 24px 0 rgba(236, 72, 153, 0.15)' }}
              >
                Search
              </button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-4 ml-20 mr-20">
              {promptOptions.map((prompt, idx) => (
                <button
                  key={idx}
                  className="px-2 py-1 rounded-lg bg-white/10 text-white/80 font-normal hover:bg-white hover:text-black transition font-['Lato] text-[16px] leading-[26px]"
                  onClick={() => setSearch(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateAI; 