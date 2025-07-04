import React, { useState } from 'react';
import Sidebar from '../../Components/Sections/Dashboard/Sidebar';
import DHeader from '../../Components/Sections/Dashboard/DHeader';
import Background from '../../assets/ActivateaiBG.png';
import ActivateAIIcon from '../../assets/ActivateAI.svg';
import AIAnalysisModal from '../../Components/Sections/Dashboard/modal/AIAnalysisModal';
import UpgradeRequiredModal from '../../Components/Sections/Dashboard/modal/UpgradeRequiredModal';
import BitcoinLogo from '../../assets/Bitcoin1.svg';
import Meter from '../../assets/Meter.svg'
import Meter2 from '../../assets/Meter2.svg'
import DownloadG from '../../assets/DownloadG.svg';
import GithubRepo from '../../assets/GithubRepo.svg';
import GithubRepo2 from '../../assets/GitRepo2.svg';
import Bot from '../../assets/Bot.svg';
import Diamond from '../../assets/Diamond.svg';
import RedFlag from '../../assets/RedFlag.svg';

import Binance from '../../assets/Binance2.svg';
import Bybit from '../../assets/Bybit.svg';
import OKX from '../../assets/OKX.svg';
import CoinBase from '../../assets/CoinBase.svg';



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
];

const SocialData = [
  {
    Interactions : '80,203,498',
    SpamPosts:'26',
    SocialVolume : '88,686',
    UniquePosts	:'836',
    MultiSocialGalaxyScore :Meter,
    SocialRanking :'1',
    MarketSentiment: Meter,
  },
];


// Add this after coinData
const exchangeCoinData = [
  {
    logo: Binance,
    name: 'Binance',
    type: 'CEX',
    pair: 'BTC/USDT',
    volume: '$19,756,231',
    trust: 'No Trust',
    trustColor: 'bg-red-900/30 text-red-600',
  },
  {
    logo: Bybit, // Bybit logo not found, use placeholder or BinanceLogo
    name: 'Bybit',
    type: 'CEX',
    pair: 'BTC/USDT',
    volume: '$19,756,231',
    trust: 'Fair Trust',
    trustColor: 'bg-yellow-900/30 text-yellow-600',
  },
  {
    logo: OKX, // OKX logo not found, use placeholder or BinanceLogo
    name: 'OKX',
    type: 'CEX',
    pair: 'BTC/USDT',
    volume: '$19,756,231',
    trust: 'High Trust',
    trustColor: 'bg-green-900/30 text-green-600',
  },
  {
    logo: CoinBase, // Coinbase logo not found, use placeholder or BinanceLogo
    name: 'Coinbase',
    type: 'CEX',
    pair: 'BTC/USDT',
    volume: '$19,756,231',
    trust: 'No Trust',
    trustColor: 'bg-red-900/30 text-red-600',
  },
  {
    logo: Binance,
    name: 'Binance',
    type: 'CEX',
    pair: 'BTC/USDT',
    volume: '$19,756,231',
    trust: 'High Trust',
    trustColor: 'bg-green-900/30 text-green-600',
  },
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 text-white text-center font-[Schibsted_Grotesk]">
              AI Powered <span className="bg-gradient-to-r from-yellow-400 via-orange-400 via-red-400  to-red-500 bg-clip-text text-transparent">Search & Analytics</span>
            </h1>
            <p className="text-white/70 text-center mb-8 text-base sm:text-lg md:text-[17px] font-['Lato'] leading[28.8px] tracking-[0.18px]">Use natural language to discover and analyse cryptocurrency opportunities</p>
            {/* Responsive Search Bar */}
            <div className="relative w-full max-w-full md:w-[800px] mx-auto mb-6 flex flex-col md:block">
              <input
                type="text"
                className="w-full h-[50px] md:h-[55px] px-4 py-2 md:pr-28 rounded-xl bg-[#0F0F0F] text-white border border-[#2e2e2e] placeholder-gray-400 focus:outline-none font-['Schibsted_Grotesk']"
                placeholder="Give me a Crypto coin with high investment potential..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {/* Desktop: button inside input, Mobile: button below input */}
              <div className="hidden md:block">
                <button
                  className="absolute top-[26px] right-2 transform -translate-y-1/2 px-6 py-1 rounded-xl font-semibold text-lg bg-gradient-to-r from-purple-400 via-white to-pink-300 text-black shadow-lg transition hover:scale-105"
                  style={{ boxShadow: '0 4px 24px 0 rgba(236, 72, 153, 0.15)' }}
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
              <div className="block md:hidden mt-3 w-full flex justify-center">
                <button
                  className="px-6 py-2 rounded-xl font-semibold text-base bg-gradient-to-r from-purple-400 via-white to-pink-300 text-black shadow-lg transition hover:scale-105 w-2/3"
                  style={{ boxShadow: '0 4px 24px 0 rgba(236, 72, 153, 0.15)' }}
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
            {/* Prompt Buttons */}
            <div className="flex flex-col items-center w-full mt-8 gap-8">
              {/* Mobile: only first two prompts in one row with scroll, centered */}
              <div className="flex md:hidden w-full overflow-x-auto gap-3 pb-2 justify-center">
                {promptOptions.slice(0, 2).map((prompt, idx) => (
                  <button
                    key={idx}
                    className="px-2 py-3 rounded-xl bg-white/10 text-white/80 font-normal hover:bg-white hover:text-black transition font-['Lato'] text-[14px] leading-[22px] min-w-[150px] text-center mb-2"
                    onClick={() => setSearch(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              {/* Desktop: two rows as before */}
              <div className="hidden md:flex flex-col w-full gap-8">
                <div className="flex justify-center gap-5 w-full">
                  {promptOptions.slice(0, 4).map((prompt, idx) => (
                    <button
                      key={idx}
                      className="px-2 py-3 rounded-xl bg-white/10 text-white/80 font-normal hover:bg-white hover:text-black transition font-['Lato'] text-[14px] leading-[22px] min-w-[150px] text-center"
                      onClick={() => setSearch(prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <div className="flex justify-center gap-5 w-full mb-5">
                  {promptOptions.slice(4).map((prompt, idx) => (
                    <button
                      key={idx + 4}
                      className="px-2 py-3 rounded-xl bg-white/10 text-white/80 font-normal hover:bg-white hover:text-black transition font-['Lato'] text-[14px] leading-[22px] min-w-[150px] text-center"
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
        {/* Tokenomics Section */}
        <div className="mt-10 mb-4 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk] mb-4">Tokenomics</h2>
            </div>
            <button className="px-4 py-2 rounded-lg bg-[#202020] hover:bg-[#2e2e2e] text-white/60 text-sm font-normal border border-[#333] font-[Schibsted_Grotesk] ">
                <img src={DownloadG} alt="Download" className="inline-block w-5 h-4 mr-2 align-middle" />
                Export Results
              </button>
          </div>
          <div className="rounded-3xl p-4 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0">
            <div className="overflow-x-auto">
              <table className="min-w-full text-center">
                <thead>
                  <tr className="bg-black text-white text-sm">
                    <th className="py-2 px-6 font-semibold font-['Schibsted_Grotesk'] bg-black rounded-tl-2xl rounded-bl-2xl text-center">Coin Name</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center">Price</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center">Market Cap</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center">Market Cap Rank</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center">Total Supply</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center">Max Supply</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center">Circulating Supply</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 rounded-tr-2xl rounded-br-2xl text-center">Inflation Model</th>
                  </tr>
                </thead>
                <tbody className="bg-[#202020] text-white text-base">
                  {coinData.map((coin, idx) => (
                    <tr key={idx} className=" transition text-white border-t border-[#232323]">
                      <td className="py-4 px-6 flex items-center gap-3 font-['Schibsted_Grotesk'] text-center">
                        <img src={coin.logo} alt={coin.symbol} className="w-7 h-7" />
                        <div>
                          <div className="font-semibold">{coin.name}</div>
                          <div className="text-xs text-white/60 text-left">{coin.symbol}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-green-400 font-normal font-['Schibsted_Grotesk'] text-center">{coin.price}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk'] text-center">{coin.marketCap}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk'] text-center">
                        <span className="bg-green-900/30 text-green-400 px-4 py-1 rounded-full text-xs font-normal">{coin.rank}</span>
                      </td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk'] text-center">{coin.totalSupply}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk'] text-center">{coin.maxSupply}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk'] text-center">{coin.circulatingSupply}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk'] text-center">{coin.inflationModel}</td>
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
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk] mb-4 mt-4">Volume Liquidity</h2>
            </div>
          </div>
          <div className="rounded-3xl p-4 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-black text-white text-sm">
                    <th className="py-2 pl-4 pr-20 font-normal font-['Schibsted_Grotesk'] bg-black rounded-tl-2xl rounded-bl-2xl text-gray-400 text-left w-auto whitespace-nowrap">24h CEX Volume In $</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] bg-black rounded-tr-2xl rounded-br-2xl text-gray-400 text-left w-full whitespace-nowrap">24h DEX Volume In $</th>
                  </tr>
                </thead>
                <tbody className=" text-white text-base">
                  <tr>
                    <td className="py-4 pl-8 pr-8 font-['Schibsted_Grotesk'] text-centre w-auto">33902749477</td>
                    <td className="py-4 pl-18 pr-8 font-['Schibsted_Grotesk'] text-left w-full">Null</td>
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
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk] mb-4 mt-4">Social Engagement Metrics + Scores</h2>
            </div>
          </div>
          <div className="rounded-3xl p-4 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0">
            <div className="overflow-x-auto">
              <table className="min-w-full text-center">
                <thead>
                  <tr className="bg-black text-white text-xs">
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 bg-black rounded-tl-2xl rounded-bl-2xl text-center text-xs">24h Interactions</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center text-xs">24h Spam Posts</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center text-xs">24h Social Volume</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center text-xs">24h Unique Posts</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center text-xs">Multi Social Galaxy Score</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center text-xs">Social Ranking #</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 rounded-tr-2xl rounded-br-2xl text-center text-xs">Market Sentiment</th>
                  </tr>
                </thead>
                <tbody className="bg-[#202020] text-white text-base">
                  {SocialData.map((social, idx) => (
                    <tr key={idx} className=" transition text-white border-t border-[#232323]">
                      <td className="py-4 px-6 font-['Schibsted_Grotesk'] text-center">{social.Interactions}</td>
                      <td className="py-4 px-6 font-normal font-['Schibsted_Grotesk'] text-center">{social.SpamPosts}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk'] text-center">{social.SocialVolume}</td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk'] text-center">{social.UniquePosts}</td>
                      <td className="py-4 px-15 flex items-center gap-3 font-['Schibsted_Grotesk'] text-center">
                        <img src={Meter} className="w-7 h-7" />
                        <div>
                          <span className="text-md text-white/80">71.3%</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-['Schibsted_Grotesk'] text-center">{social.SocialRanking}</td>
                      <td className="py-4 px-12 flex items-center gap-3 font-['Schibsted_Grotesk'] text-center">
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
        {/*Git Section */}
        <div className="mt-10 mb-4 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk] mb-4 mt-4">
                GitHub Social Profile Activity + Link
              </h2>
            </div>
          </div>
          <div className="rounded-3xl px-6 py-4 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto pb-0">
            <div>
              <span className="block text-white mb-4 mt-2 font-['Lato'] text-[18px]">
                This repo has 84169 stars, 30 contributors, and 30 commits in recent history.
              </span>
              <a
                href="#"
                className="hover:underline text-sm mb-6 inline-block font-['Lato'] text-[16px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
                <img
                  src={GithubRepo}
                  alt="GitHub Repo"
                  className="inline-block w-4 h-3 ml-1 align-text-bottom"
                  style={{ display: 'inline', verticalAlign: 'middle' }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-4 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk] mb-4 mt-4">Top 5 Exchange Listings (If Applicable)</h2>
            </div>
          </div>
          <div className="rounded-3xl p-4 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full w-full text-center block overflow-x-auto overflow-hidden">
                <thead className="w-full block">
                  <tr className="bg-black text-white text-sm w-full flex rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden gap-8">
                  <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 flex-1  text-center">Exchange Number</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 flex-1  text-center">Exchange Listing</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 flex-1  text-center">Trading Pair</th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 flex-1  text-center">24h Volume </th>
                    <th className="py-2 px-6 font-normal font-['Schibsted_Grotesk'] text-gray-400 flex-1  text-center">Trust Score</th>
                  </tr>
                </thead>
                <tbody className="bg-[#202020] text-white text-base w-full block">
                  {exchangeCoinData.map((exchange, idx) => (
                    <tr key={idx} className={`transition text-white border-t border-[#232323] w-full flex${idx === exchangeCoinData.length - 1 ? ' rounded-bl-2xl rounded-br-2xl overflow-hidden' : ''} gap-8`}>
                      {/* Exchange Number */}
                      <td className="py-4 px-6 flex-1 flex items-center justify-center font-['Schibsted_Grotesk'] text-center">{idx + 1}</td>
                      {/* Exchange Listing: logo, name, type */}
                      <td className="py-4 px-6 flex-1 flex items-center gap-3 font-['Schibsted_Grotesk'] text-center">
                        <span
                          className="w-10 h-10 rounded-full flex items-center justify-center ml-3"
                          style={{
                            background:
                              exchange.name === 'Binance' ? '#181A20'
                              : exchange.name === 'Bybit' ? '#F9D23C'
                              : exchange.name === 'OKX' ? '#000'
                              : exchange.name === 'Coinbase' ? '#1652F0'
                              : '#ccc'
                          }}
                        >
                          {exchange.logo ? (
                            <img src={exchange.logo} alt={exchange.name} className="w-7 h-7" />
                          ) : (
                            <span className="font-bold text-black">{exchange.name.slice(0,2).toUpperCase()}</span>
                          )}
                        </span>
                        <div className=''>
                          <div className="font-semibold">{exchange.name}</div>
                          <div className="text-xs text-white/60 text-left">{exchange.type}</div>
                        </div>
                      </td>
                      {/* Trading Pair */}
                      <td className="py-4 px-6 flex-1 font-['Schibsted_Grotesk'] flex items-center text-centre ml-15">
                        {exchange.pair}
                        <span className="ml-1 mb-2">
                          <img src={GithubRepo2} alt="link" className="inline-block w-3 h-3 align-text-bottom" />
                        </span>
                      </td>
                      {/* 24h Volume */}
                      <td className="py-4 px-6 flex-1 font-['Schibsted_Grotesk'] text-center">{exchange.volume}</td>
                      {/* Trust Score */}
                      <td className={`py-4 px-6 pl-12 flex-1 font-['Schibsted_Grotesk']${idx === exchangeCoinData.length - 1 ? ' rounded-br-2xl' : ''} text-center`}> <span className={`${exchange.trustColor} px-4 py-1 rounded-full text-xs font-normal`}>{exchange.trust}</span></td>
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
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk] mb-4 mt-4">
              Team Analysis + Dev Activity
              </h2>
            </div>
          </div>
          <div className="rounded-3xl px-6 py-4 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0">
            <div>
             <div className="text-white text-base font-normal mb-1 font-['Schibsted_Grotesk']">Summary:</div>
              <span className="block text-white mb-2 mt-2 font-['Schibsted_Grotesk'] text-[16px]">
              Although Bitcoin doesn't have a centralised development team, you can stay updated on the latest development activity by following relevant discussions.
              </span>
              <a
                href="#"
                className="hover:underline text-sm mb-6 inline-block font-['Lato'] text-[12px] text-zinc-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.reddit.com/answers/026a911e-49fc-49b9-b852-471b5623d6b3/?q=reddit%20Bitcoin%20dev%20activit&source=SERP
              </a>
            </div>
          </div>
        </div>

        {/*Whitepaper Analysis */}
        <div className="mt-10 mb-4 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk] mb-4 mt-4">Whitepaper Analysis</h2>
            </div>
          </div>
          <div className="rounded-3xl p-4 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0 overflow-hidden">
            <div className="w-full bg-black rounded-2xl flex justify-between px-8 py-3 mb-6">
              <div className="flex-1 text-center text-gray-400  font-normal">Clarity</div>
              <div className="flex-1 text-center text-gray-400  font-normal">Originality</div>
              <div className="flex-1 text-center text-gray-400  font-normal">Fluff</div>
            </div>
            <div className="w-full flex justify-between items-center px-8 mb-6">
              <div className="flex-1 flex flex-row items-center justify-center gap-2">
                <img src={Meter} alt="Clarity" className="w-10 h-10" />
                <span className="text-white text-lg font-semibold">9/10</span>
              </div>
              <div className="flex-1 flex flex-row items-center justify-center gap-2">
                <img src={Meter} alt="Originality" className="w-10 h-10" />
                <span className="text-white text-lg font-semibold">10/10</span>
              </div>
              <div className="flex-1 flex flex-row items-center justify-center gap-2">
                <img src={Meter2} alt="Fluff" className="w-10 h-10" />
                <span className="text-white text-lg font-semibold">2/10</span>
              </div>
            </div>
            <hr className="border-gray-600 my-4" />
            <div className="px-2 pb-2">
            <div className="text-white text-base font-normal mb-1 font-['Schibsted_Grotesk']">Summary:</div>
              <div className="block text-white mb-2 mt-2 font-['Schibsted_Grotesk'] text-[15px]">
                The Bitcoin whitepaper presents a solution to the problem of double-spending in digital transactions. It proposes a peer-to-peer network that timestamps transactions, forming an immutable record. The system relies on proof-of-work and the majority control of CPU power by honest nodes for its security. It also suggests an electronic payment system based on cryptographic proof instead of trust, eliminating the need for a trusted third party.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-4 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk] flex items-center mb-4 mt-4">
                GemScope's Bot Detection Scanner
                <img src={Bot} alt="Bot" className="w-10 h-10 ml-2 inline-block align-middle" />
              </h2>
            </div>
          </div>
          <div className="rounded-3xl px-6 py-6 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0 flex items-center">
            <span className="text-2xl mr-3 mb-8">✅</span>
            <span className="text-white text-2xl font-semibild mb-8 font-['Schibsted_Grotesk']">Normal Social Behavior</span>
          </div>
        </div>


        <div className="mt-10 mb-4 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk] mb-4 mt-4">Gem Summary + Investment Analysis</h2>
            </div>
          </div>
          <div className="rounded-3xl px-6 py-6 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0">
            <div className="flex items-center mb-2">
              <span className="text-white text-lg font-semibold mr-2">GemScore</span>
              <img src={Diamond} alt="Diamond" className="w-6 h-6 mr-2 inline-block align-middle" />
            </div>
            <div className="text-white text-4xl font-bold mb-2">10/10</div>
            <div className="w-full h-4 bg-[#232] rounded-full mb-6">
              <div className="h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="text-white text-base font-normal mb-1 font-['Schibsted_Grotesk']">Summary:</div>
            <div className="block text-white  mt-2 font-['Schibsted_Grotesk'] text-[15px] mb-4">
            Bitcoin is considered one of the best crypto investments because it's the first and most recognized cryptocurrency, with a fixed supply of 21 million coins that creates digital scarcity. Its strong security, decentralization, and increasing institutional adoption position it as a reliable store of value—often referred to as "digital gold." With high liquidity, global accessibility, and a proven history of long-term returns, Bitcoin remains a foundational asset in any crypto portfolio.
            </div>
          </div>
        </div>

        
        <div className="mt-10 mb-4 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h2 className="text-2xl font-medium text-white mr-4 font-[Schibsted_Grotesk] mb-4 mt-4">Red Flag Summary + Risk Report</h2>
            </div>
          </div>
          <div className="rounded-3xl px-6 py-6 bg-[#202020] shadow-lg border border-[#23232B] w-full max-w-full mx-auto mb-0 pb-0">
          <div className="flex items-center mb-2">
              <span className="text-white text-lg font-semibold mr-2">Red Flag Score</span>
              <img src={RedFlag} alt="RedFlag" className="w-6 h-6 mr-2 inline-block align-middle" />
            </div>
            <div className="text-white text-4xl font-bold mb-2">1/10</div>
            <div className="w-full h-4 bg-black rounded-full mb-6">
              <div className="h-4 bg-gradient-to-r from-red-400 to-red-600 rounded-full" style={{ width: '15%' }}></div>
            </div>
            <div className="text-white text-base font-normal mb-1 font-['Schibsted_Grotesk']">Summary:</div>
            <div className="block text-white mt-2 font-['Schibsted_Grotesk'] text-[15px] mb-4">
              Bitcoin can be considered a weaker investment compared to other cryptos because it offers lower growth potential, having already captured much of the market's value. It lacks the advanced utility of newer blockchains that support smart contracts, DeFi, and real-world applications. Its energy-intensive proof-of-work model also raises environmental concerns, and its slower development pace makes it less adaptable to innovation. For investors seeking higher returns or cutting-edge technology, alternative cryptocurrencies may offer more upside.
            </div>
          </div>
        </div>

        
      </div>
      <AIAnalysisModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onComplete={handleAnalysisComplete}
        plan={'Enterprise Tier'}
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
