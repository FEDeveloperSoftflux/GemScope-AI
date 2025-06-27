import React, { useState } from 'react';
import { Plus, TrendingUp, TrendingDown, Trash2 } from 'lucide-react';

// Crypto Row Component
const CryptoRow = ({ crypto, onDelete }) => (
  <div className="grid grid-cols-5 items-center px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors">
    {/* Logo & Name */}
    <div className="flex items-center gap-3 min-w-0 col-span-2">
      <div className="w-10 h-10 rounded-md flex items-center justify-center bg-black/80">
        {crypto.logo ? (
          <img src={crypto.logo} alt={crypto.name} className="w-8 h-8 rounded-full" />
        ) : (
          <span className="text-white font-bold text-lg">{crypto.symbol.charAt(0)}</span>
        )}
      </div>
      <div className="min-w-0">
        <p className="font-medium text-white truncate font-['Schibsted_Grotesk'] text-[15px] leading-[20px]">{crypto.name}</p>
        <p className="text-xs text-gray-400 uppercase truncate font-['Lato']">{crypto.symbol}</p>
      </div>
    </div>
    {/* Price */}
    <div className="text-white font-normal text-right col-span-1 font-['Schibsted_Grotesk'] text-[15px] leading-[20px]">
      {crypto.price}
    </div>
    {/* Trend */}
    <div className={` font-['Schibsted_Grotesk'] text-xs flex items-center gap-1 ${crypto.positive ? 'text-green-400' : 'text-red-400'} justify-end col-span-1` }>
      {crypto.positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
      {crypto.change}
    </div>
    {/* Delete Button */}
    <div className="flex justify-end col-span-1">
      <button
        className="p-2 rounded-md border border-gray-500 hover:bg-white/10 transition-colors w-7 h-7 flex items-center justify-center"
        onClick={() => onDelete(crypto.symbol)}
        aria-label={`Delete ${crypto.name}`}
      >
        <Trash2 size={16} className="text-white" />
      </button>
    </div>
  </div>
);

// Main Watchlist Component
const Watchlist = ({ cryptoData: initialCryptoData }) => {
  const [cryptoData, setCryptoData] = useState(initialCryptoData);

  const handleDelete = (symbol) => {
    setCryptoData((prev) => prev.filter((c) => c.symbol !== symbol));
  };

  return (
    <div className="col-span-2 bg-[#18181b] rounded-2xl p-4 sm:p-6 max-w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-end gap-2">
          <span className="font-['Schibsted_Grotesk'] text-[30px] leading-[20px] font-weight-700">My Watchlist</span>
        </h3>
        <button className=" font-['Schibsted_Grotesk'] bg-gradient-to-r from-purple-400 via-white to-pink-300 text-black px-4 py-2 rounded-xl font-semibold flex items-center gap-2 shadow-lg transition-all" style={{ boxShadow: '0 4px 24px 0 rgba(236, 72, 153, 0.15)' }}>
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
    </div>
  );
};

export default Watchlist;