import React, { useState } from 'react';
import CrossButton from '../../../Common/CrossButton';
import Trendup from '../../../../assets/Trendup.svg';
import Trenddown from '../../../../assets/Trenddown.svg';
import Add from '../../../../assets/Plus.svg'

const AddCoinModal = ({ show, onClose, coins, onAdd }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(coins);

  const handleSearch = (e) => {
    e.preventDefault();
    setResults(
      coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  React.useEffect(() => {
    setResults(coins);
  }, [coins]);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-black/580">
      <div className="bg-[#202020] rounded-2xl p-6 w-full max-w-3xl shadow-lg relative border border-white/20 min-h-[500px]">
        <CrossButton
          onClick={onClose}
          className="absolute top-4 right-4"
          aria-label="Close"
        />
        <h2 className="text-xl font-normal mb-8 text-white font-['Schibsted_Grotesk'] text-[25px]">Add Coin</h2>
        <form onSubmit={handleSearch} className="relative mb-4">
            <input
                className="w-full px-4 py-2 pr-28 rounded-xl bg-[#0F0F0F] text-white border border-[#2e2e2e] placeholder-gray-400 focus:outline-none font-['Schibsted_Grotesk']"
                placeholder="Bitco"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                type="submit"
                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 px-5 py-1.5 rounded-xl bg-gradient-to-r from-purple-400 via-white to-pink-300 text-black font-semibold text-sm shadow-lg"
            >
                Search
            </button>
        </form>
        <div className="rounded-lg p-2 min-h-[120px] max-h-72 overflow-y-auto hide-scrollbar">
          {results.length === 0 ? (
            <div className="text-gray-400 text-center py-8 font-['Schibsted_Grotesk']">No coins found.</div>
          ) : (
            results.map((coin) => (
              <div
                key={coin.symbol}
                className="flex items-center px-2 py-2 hover:bg-[#23232b] rounded-xl transition-colors mb-3"
              >
                <img src={coin.logo} alt={coin.name} className="w-8 h-8 rounded-full mr-5" />
                <div className="flex flex-col min-w-0" style={{ width: 140 }}>
                  <span className="font-semibold text-white  font-['Schibsted_Grotesk'] text-[15px] leading-[20px]">{coin.name}</span>
                  <span className="text-xs text-gray-400 uppercase truncate font-['Lato']">{coin.symbol}</span>
                </div>
                <div className="flex-1 flex items-center justify-end gap-30">
                  <span className="text-white font-normal text-right col-span-1 font-['Schibsted_Grotesk'] text-[15px] leading-[20px]">{coin.price}</span>
                  <span className={`font-['Schibsted_Grotesk'] text-xs flex items-center gap-1 ${coin.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {coin.positive ? (
                      <img src={Trendup} alt="Trend Up" className="w-2 h-2" />
                    ) : (
                      <img src={Trenddown} alt="Trend Down" className="w-2 h-2" />
                    )}
                    {coin.change}
                  </span>
                  <button
                    className="ml-4 w-7 h-7 flex items-center justify-center rounded-lg border border-gray-500 bg-transparent hover:bg-gray-400/20 text-white text-2xl transition-colors"
                    onClick={() => onAdd(coin)}
                    aria-label={`Add ${coin.name}`}
                  >
                    <img src={Add} alt="Add" className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCoinModal; 