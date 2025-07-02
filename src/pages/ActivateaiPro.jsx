import React, { useState } from 'react';
import Sidebar from '../Components/Sections/Dashboard/Sidebar';
import DHeader from '../Components/Sections/Dashboard/DHeader';
import Background from '../assets/Background.png';
import ActivateAIIcon from '../assets/ActivateAI.svg';
import AIAnalysisModal from '../Components/Sections/Dashboard/modal/AIAnalysisModal';
import UpgradeRequiredModal from '../Components/Sections/Dashboard/modal/UpgradeRequiredModal';
import BitcoinLogo from '../assets/Bitcoin1.svg';
import Meter from '../assets/Meter.svg'
import DownloadG from '../assets/DownloadG.svg';

const promptOptions = [
  'Show me a hidden gem',
  'Scan $BTC',
  'Find undervalued tokens',
  'Analyse $ETH data',
  'Give me a high liquidity coin',
  'Research a trending altcoin',
];

// Dummy data for coins
const coinData = [
  {
    logo: BitcoinLogo,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$42,350',
    marketCap: '$2125.09B',
    rank: '#1',
    totalSupply: '19,756,231',
    maxSupply: '21,000,000',
    circulatingSupply: '19,756,231',
    inflationModel: 'Capped',
  },
  // Add more coins here as needed
];

const ActivateAI = ({ plan, setUserPlan }) => {
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  // Prompts remaining as state, set based on plan
  const initialPrompts = plan === 'pro' ? 30 : 3;
  const [promptsRemaining, setPromptsRemaining] = useState(initialPrompts);
  const progress = plan === 'pro' ? 0 : 30;

  // Handler for search button
  const handleSearch = () => {
    if (promptsRemaining === 0) {
      setShowUpgradeModal(true);
    } else {
      setModalOpen(true);
    }
  };

  // Handler for when analysis completes
  const handleAnalysisComplete = () => {
    setPromptsRemaining(prev => {
      const next = prev - 1;
      // If this was the last prompt, show upgrade modal after closing
      if (next === 0) {
        setTimeout(() => setShowUpgradeModal(true), 600); // delay to allow modal to close
      }
      return next;
    });
  };

  // Handler for upgrade
  const handleUpgrade = () => {
    // Add upgrade logic here (e.g., redirect to pricing)
    setShowUpgradeModal(false);
  };

  // Handler for maybe later
  const handleMaybeLater = () => {
    setShowUpgradeModal(false);
  };

  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <DHeader title="Activate AI" icon={ActivateAIIcon} plan={plan} setUserPlan={setUserPlan} />
        <div className="mt-4 flex flex-col w-full">
          <div
            className="w-full max-w-6xl mx-auto rounded-3xl p-5 overflow-hidden shadow-lg"
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
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            {/* Prompt Buttons */}
            <div className="flex flex-col items-center w-full mt-8 gap-4">
              <div className="flex justify-center gap-6 w-full">
                {promptOptions.slice(0, 4).map((prompt, idx) => (
                  <button
                    key={idx}
                    className="px-3 py-2 rounded-xl bg-white/10 text-white/80 font-normal hover:bg-white hover:text-black transition font-['Lato'] text-[14px] leading-[22px] min-w-[150px] text-center"
                    onClick={() => setSearch(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              <div className="flex justify-center gap-4 w-full">
                {promptOptions.slice(4).map((prompt, idx) => (
                  <button
                    key={idx + 4}
                    className="px-3 py-2 rounded-xl bg-white/10 text-white/80 font-normal hover:bg-white hover:text-black transition font-['Lato'] text-[14px] leading-[22px] min-w-[150px] text-center"
                    onClick={() => setSearch(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Tokenomics Section */}
        <div className="mt-10 mb-4 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk]">Tokenomics</h2>
              <span className="bg-purple-900/30 text-purple-400 text-xs px-1 py-1 rounded-full font-normal ml-2 font-['Schibsted_Grotesk']">Pro Plan</span>
            </div>
            <button className="px-4 py-2 rounded-lg bg-[#202020] hover:bg-[#2e2e2e] text-white/60 text-sm font-normal border border-[#333] font-[Schibsted_Grotesk] ">
                <img src={DownloadG} alt="Download" className="inline-block w-5 h-4 mr-2 align-middle" />
                Export PDF
              </button>
          </div>
          <div className="rounded-3xl p-4 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="bg-black text-white text-sm">
                    <th className="py-2 px-6 font-semibold font-['Schibsted_Grotesk'] bg-black rounded-tl-2xl rounded-bl-2xl">Coin Name</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Price</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Market Cap</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Market Cap Rank</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Total Supply</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Max Supply</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Circulating Supply</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 rounded-tr-2xl rounded-br-2xl">Inflation Model</th>
                  </tr>
                </thead>
                <tbody className="bg-[#202020] text-white text-base">
                  {coinData.map((coin, idx) => (
                    <tr key={idx} className=" transition text-white border-t border-[#232323]">
                      <td className="py-4 px-6 flex items-center gap-3 font-['Schibsted_Grotesk']">
                        <img src={coin.logo} alt={coin.symbol} className="w-7 h-7" />
                        <div>
                          <div className="font-semibold">{coin.name}</div>
                          <div className="text-xs text-white/60">{coin.symbol}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-green-400 font-normal font-['Schibsted_Grotesk']">{coin.price}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.marketCap}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">
                        <span className="bg-green-900/30 text-green-400 px-4 py-1 rounded-full text-xs font-normal">{coin.rank}</span>
                      </td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.totalSupply}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.maxSupply}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.circulatingSupply}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.inflationModel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Volume Liquidity Section */}
        <div className="mb-4 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk]">Volume Liquidity</h2>
            </div>
          </div>
          <div className="rounded-3xl p-4 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="bg-black text-white text-sm">
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] bg-black rounded-tl-2xl rounded-bl-2xl text-gray-400">24h CEX Volume In $</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] bg-black rounded-tr-2xl rounded-br-2xl text-gray-400">24h DEX Volume In $</th>
                  </tr>
                </thead>
                <tbody className=" text-white text-base">
                  <tr>
                    <td className="py-4 px-6 font-['Schibsted_Grotesk']">33902749477</td>
                    <td className="py-4 px-6 font-['Schibsted_Grotesk']">Null</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Liquidity Info Section */}
        <div className="mb-4 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk]">Social Engagement Metrics + Scores</h2>
            </div>
          </div>
          <div className="rounded-3xl p-4 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="bg-black text-white text-sm">
                    <th className="py-2 px-6 font-semibold font-['Schibsted_Grotesk'] bg-black rounded-tl-2xl rounded-bl-2xl">Coin Name</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Price</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Market Cap</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Market Cap Rank</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Total Supply</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Max Supply</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Circulating Supply</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 rounded-tr-2xl rounded-br-2xl">Inflation Model</th>
                  </tr>
                </thead>
                <tbody className="bg-[#202020] text-white text-base">
                  {coinData.map((coin, idx) => (
                    <tr key={idx} className=" transition text-white border-t border-[#232323]">
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.circulatingSupply}</td>
                      <td className="py-4 px-6 text-green-400 font-normal font-['Schibsted_Grotesk']">{coin.price}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.marketCap}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">
                        <span className="bg-green-900/30 text-green-400 px-4 py-1 rounded-full text-xs font-normal">{coin.rank}</span>
                      </td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.totalSupply}</td>
                      <td className="py-4 px-10 flex items-center gap-3 font-['Schibsted_Grotesk']">
                        <img src={Meter} className="w-7 h-7" />
                        <div>
                          <span className="text-md text-white/80">71.9%</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.circulatingSupply}</td>
                      <td className="py-4 px-10 flex items-center gap-3 font-['Schibsted_Grotesk']">
                        <img src={Meter} className="w-7 h-7" />
                        <div>
                        <span className="text-md text-white/80">81%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-4 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk]">Tokenomics</h2>
            </div>
          </div>
          <div className="rounded-3xl p-4 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="bg-black text-white text-sm">
                    <th className="py-2 px-6 font-semibold font-['Schibsted_Grotesk'] bg-black rounded-tl-2xl rounded-bl-2xl">Coin Name</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Price</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Market Cap</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Market Cap Rank</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Total Supply</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Max Supply</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400">Circulating Supply</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 rounded-tr-2xl rounded-br-2xl">Inflation Model</th>
                  </tr>
                </thead>
                <tbody className="bg-[#202020] text-white text-base">
                  {coinData.map((coin, idx) => (
                    <tr key={idx} className=" transition text-white border-t border-[#232323]">
                      <td className="py-4 px-6 flex items-center gap-3 font-['Schibsted_Grotesk']">
                        <img src={coin.logo} alt={coin.symbol} className="w-7 h-7" />
                        <div>
                          <div className="font-semibold">{coin.name}</div>
                          <div className="text-xs text-white/60">{coin.symbol}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-green-400 font-normal font-['Schibsted_Grotesk']">{coin.price}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.marketCap}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">
                        <span className="bg-green-900/30 text-green-400 px-4 py-1 rounded-full text-xs font-normal">{coin.rank}</span>
                      </td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.totalSupply}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.maxSupply}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.circulatingSupply}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk']">{coin.inflationModel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AIAnalysisModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onComplete={handleAnalysisComplete}
        plan={'Free Tier'}
        promptsRemaining={promptsRemaining}
        progress={progress}
      />
      <UpgradeRequiredModal
        open={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onUpgrade={handleUpgrade}
        onMaybeLater={handleMaybeLater}
      />
    </div>
  );
};

export default ActivateAI; 
