import React, { useState } from 'react';
import { Plus,Trash2 } from 'lucide-react';
import Avalanche from '../../../assets/Avalanche.svg';
import SUI from '../../../assets/SUI.svg';
import DogeCoin from '../../../assets/DogeCoin.svg';
import XRP1 from '../../../assets/XRP1.svg';
import Cardano1 from '../../../assets/Cardano1.svg';
import Solana from '../../../assets/Solana.svg';
import Ethereum from '../../../assets/Ethereum.svg';
import Bitcoin1 from '../../../assets/Bitcoin1.svg';
import Trendup from '../../../assets/Trendup.svg';
import Trenddown from '../../../assets/Trenddown.svg';
import AddCoinModal from './modal/AddCoinModal';

// Define the initial crypto data with SVG icons
const initialCryptoData = [
  { name: 'Avalanche', symbol: 'AVAX', price: '$35.12', change: '+2.1%', positive: true, logo: Avalanche },
  { name: 'SUI', symbol: 'SUI', price: '$1.12', change: '-0.5%', positive: false, logo: SUI },
  { name: 'Dogecoin', symbol: 'DOGE', price: '$0.12', change: '+1.3%', positive: true, logo: DogeCoin },
  { name: 'XRP', symbol: 'XRP', price: '$0.65', change: '-0.2%', positive: false, logo: XRP1 },
  { name: 'Cardano', symbol: 'ADA', price: '$0.45', change: '+0.8%', positive: true, logo: Cardano1 },
  { name: 'Solana', symbol: 'SOL', price: '$110.23', change: '+3.2%', positive: true, logo: Solana },
  { name: 'Ethereum', symbol: 'ETH', price: '$3,200.00', change: '+0.9%', positive: true, logo: Ethereum },
  { name: 'Bitcoin', symbol: 'BTC', price: '$65,000.00', change: '-1.1%', positive: false, logo: Bitcoin1 },
];

// Crypto Row Component
const CryptoRow = ({ crypto, onDelete }) => (
  <div className="grid grid-cols-5 items-center px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors">
    {/* Logo & Name */}
    <div className="flex items-center gap-3 min-w-0 col-span-2">
      <div className="w-12 h-12 rounded-md flex items-center justify-center">
        {crypto.logo && (
          <img src={crypto.logo} alt={crypto.name} className="w-10 h-10 rounded-full" />
        )}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-white  font-['Schibsted_Grotesk'] text-[15px] leading-[20px]">{crypto.name}</p>
        <p className="text-xs text-gray-400 uppercase truncate font-['Lato']">{crypto.symbol}</p>
      </div>
    </div>
    {/* Price */}
    <div className="text-white font-normal text-right col-span-1 font-['Schibsted_Grotesk'] text-[15px] leading-[20px]">
      {crypto.price}
    </div>
    {/* Trend */}
    <div className={` font-['Schibsted_Grotesk'] text-xs flex items-center gap-1 ${crypto.positive ? 'text-green-400' : 'text-red-400'} justify-end col-span-1` }>
      {crypto.positive ? (
        <img src={Trendup} alt="Trend Up" className="w-2 h-2" />
      ) : (
        <img src={Trenddown} alt="Trend Down" className="w-2 h-2" />
      )}
      {crypto.change}
    </div>
    {/* Delete Button */}
    <div className="flex justify-end col-span-1">
      <button
        className="p-2 rounded-md border border-gray-500 hover:bg-white/10 transition-colors w-8 h-8 flex items-center justify-center"
        onClick={() => onDelete(crypto.symbol)}
        aria-label={`Delete ${crypto.name}`}
      >
        <Trash2 size={16} className="text-white" />
      </button>
    </div>
  </div>
);

// Main Watchlist Component
const Watchlist = () => {
  const [cryptoData, setCryptoData] = useState(initialCryptoData);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (symbol) => {
    setCryptoData((prev) => prev.filter((c) => c.symbol !== symbol));
  };

  const handleAddCoin = (coin) => {
    if (!cryptoData.some(c => c.symbol === coin.symbol)) {
      setCryptoData(prev => [...prev, coin]);
    }
    setShowModal(false);
  };

  return (
    <div className="col-span-2 bg-[#18181b] rounded-2xl p-4 sm:p-6 max-w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-end gap-2">
          <span className="font-['Schibsted_Grotesk'] text-[30px] leading-[20px] font-weight-700">My Watchlist</span>
        </h3>
        <button
          className="relative px-4 py-2 text-[16px] font-medium text-black bg-gradient-to-r from-purple-400 via-white to-pink-300 rounded-xl shadow-black/30 drop-shadow-lg transform transition-all duration-300 ease-in-out active:scale-95 font-['Schibsted_Grotesk'] shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)] flex items-center gap-2"
          style={{ boxShadow: '0 4px 24px 0 rgba(236, 72, 153, 0.15)' }}
          onClick={() => setShowModal(true)}
        >
          <Plus size={18} />
          Add Coin
        </button>
      </div>
      <div className="space-y-2">
        {cryptoData.map((crypto, index) => (
          <React.Fragment key={crypto.symbol}>
            <CryptoRow crypto={crypto} onDelete={handleDelete} />
            {index !== cryptoData.length - 1 && (
              <div className="border-t border-gray-700 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
      <AddCoinModal
        show={showModal}
        onClose={() => setShowModal(false)}
        coins={initialCryptoData.filter(c => !cryptoData.some(w => w.symbol === c.symbol))}
        onAdd={handleAddCoin}
      />
    </div>
  );
};

export default Watchlist;