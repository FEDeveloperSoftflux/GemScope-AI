import React, { useState } from 'react';
import Sidebar from '../Components/Sections/Dashboard/Sidebar';
import DHeader from '../Components/Sections/Dashboard/DHeader';
import HistoryIcon from '../assets/History.svg';
import DownloadG from '../assets/DownloadG.svg';
import SearchIcon from '../assets/Search.svg';

const dummyData = [
  { id: 10, detail: 'What is ethereum ?', date: '12:00pm / 02-05-2025', tier: 'Free' },
  { id: 9, detail: 'Tell me about bitcoin', date: '12:00pm / 02-05-2025', tier: 'PRO' },
  { id: 8, detail: 'What is ethereum ?', date: '12:00pm / 02-05-2025', tier: 'ENTERPRISE' },
  { id: 7, detail: 'Tell me about bitcoin', date: '12:00pm / 02-05-2025', tier: 'PRO' },
  { id: 6, detail: 'What is ethereum ?', date: '12:00pm / 02-05-2025', tier: 'ENTERPRISE' },
  { id: 5, detail: 'Tell me about bitcoin', date: '12:00pm / 02-05-2025', tier: 'Free' },
  { id: 4, detail: 'What is ethereum ?', date: '12:00pm / 02-05-2025', tier: 'PRO' },
  { id: 3, detail: 'Tell me about bitcoin ?', date: '12:00pm / 02-05-2025', tier: 'ENTERPRISE' },
  { id: 2, detail: 'What is ethereum ?', date: '12:00pm / 02-05-2025', tier: 'PRO' },
  { id: 1, detail: 'Tell me about bitcoin ?', date: '12:00pm / 02-05-2025', tier: 'ENTERPRISE' },
];

const tierColors = {
  'Free': 'bg-purple-900 text-purple-200',
  'PRO': 'bg-purple-700 text-purple-100',
  'ENTERPRISE': 'bg-blue-900 text-blue-200',
};

// CustomCheckbox component
const CustomCheckbox = ({ checked, onChange, className = '' }) => (
  <label className={`relative inline-block align-middle cursor-pointer ${className}`}> 
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <div
      className={`w-4 h-4 border-2 rounded-sm transition-all duration-200 flex items-center justify-center ${
        checked
          ? 'border-white bg-white'
          : 'border-gray-500 bg-transparent hover:border-gray-400'
      }`}
    >
      {checked && (
        <svg
          className="w-3 h-3 text-black absolute top-0.5 left-0.5 pointer-events-none"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  </label>
);

const History = ({ plan = "free", setUserPlan }) => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelected(!selectAll ? dummyData.map(d => d.id) : []);
  };

  const handleSelect = (id) => {
    setSelected(selected.includes(id) ? selected.filter(i => i !== id) : [...selected, id]);
  };

  const filteredData = dummyData.filter(row =>
    row.detail.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen text-white flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto w-full">
        <DHeader title="Historic Prompts" icon={HistoryIcon} plan={plan} setUserPlan={setUserPlan} />
        <div className="mt-4 flex flex-col w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4 w-full">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full md:max-w-xl md:mr-8">
              <div className="relative w-full sm:w-[180px] sm:ml-8">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <img src={SearchIcon} alt="Search" className="w-4 h-4 ml-2" />
                </span>
                <input
                  type="text"
                  className="w-full h-[45px] pl-10 pr-2 rounded-lg bg-[#202020] border border-[#2e2e2e] placeholder-gray-400 focus:outline-none font-['Schibsted_Grotesk']"
                  placeholder="Search"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <label className="flex items-center gap-3 cursor-pointer select-none bg-black px-4 w-full sm:w-[180px] h-[45px] rounded-lg font-['Schibsted_Grotesk'] text-gray-300 hover:bg-gray-950 transition-colors">
                <CustomCheckbox checked={selectAll} onChange={handleSelectAll} />
                <span className="font-['Schibsted_Grotesk'] text-[16px] font-normal text-gray-400">Select All</span>
              </label>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-end md:justify-start">
              {selectAll && (
                <button className="px-4 py-2 rounded-lg bg-white hover:bg-gray-100 text-black text-sm font-normal border border-[#333] font-[Schibsted_Grotesk] flex items-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              )}
              <button className="px-4 py-2 rounded-lg bg-[#202020] hover:bg-[#2e2e2e] text-white/60 text-sm font-normal border border-[#333] font-[Schibsted_Grotesk] flex items-center">
                <img src={DownloadG} alt="Download" className="inline-block w-5 h-4 mr-2 align-middle" />
                Export PDF
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#202020] hover:bg-[#2e2e2e] text-white/60 text-sm font-normal border border-[#333] font-[Schibsted_Grotesk] flex items-center">
                <img src={DownloadG} alt="Download" className="inline-block w-4 h-4 mr-2 align-middle" />
                Export CSV
              </button>
            </div>
          </div>
          <div className="w-full max-w-6xl mx-auto rounded-3xl p-2 sm:p-4 md:p-6 bg-[#202020] shadow-lg border border-[#23232B]">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-xs sm:text-sm md:text-base">
                <thead>
                  <tr className="bg-black text-white text-sm">
                    <th className="py-2 px-0 font-semibold font-['Schibsted_Grotesk'] bg-black rounded-tl-2xl rounded-bl-2xl w-8"></th>
                    <th className="py-2 px-1 font-normal font-['Schibsted_Grotesk'] text-gray-400">Search Number</th>
                    <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400">Search Details</th>
                    <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400">Date/Time</th>
                    <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400">Tier</th>
                    <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400 rounded-tr-2xl rounded-br-2xl"></th>
                  </tr>
                </thead>
                <tbody className="bg-[#202020]">
                  {filteredData.map((row, idx) => (
                    <tr key={row.id} className="hover:bg-[#2a2a2a] transition text-white">
                      {/* Checkbox cell with proper vertical alignment */}
                      <td className="py-2 px-2 align-middle">
                        <div className="flex items-center h-full">
                          <CustomCheckbox
                            checked={selected.includes(row.id)}
                            onChange={() => handleSelect(row.id)}
                          />
                        </div>
                      </td>

                      {/* ID */}
                      <td className="py-4 px-2 text-white/80 font-['Schibsted_Grotesk'] text-[14px] font-light">
                        {row.id.toString().padStart(2, '0')}
                      </td>

                      {/* Detail */}
                      <td className="py-4 px-2 text-white/80 font-['Schibsted_Grotesk'] text-[14px] font-light">
                        {row.detail}
                      </td>

                      {/* Date */}
                      <td className="py-4 px-2 text-white/80 font-['Schibsted_Grotesk'] text-[14px] font-light">
                        {row.date}
                      </td>

                      {/* Tier badge */}
                      <td className="py-4 px-4">
                        <span
                          className={`
                            bg-gradient-to-b 
                            ${row.tier === 'Free' && 'from-[#F5DBE0]/5 to-[#C32388]/20'} 
                            ${row.tier === 'PRO' && 'from-[#2a1a3c] to-[#181c2b]'} 
                            ${row.tier === 'ENTERPRISE' && 'from-[#16213e] to-[#1a2238]'} 
                            text-[12px] font-normal rounded-full px-3 py-1 inline-block
                          `}
                        >
                          <span
                            className={`
                              bg-clip-text text-transparent 
                              ${row.tier === 'Free' && 'bg-gradient-to-b from-pink-400 to-pink-300'}
                              ${row.tier === 'PRO' && 'bg-gradient-to-b from-purple-400 to-purple-300'}
                              ${row.tier === 'ENTERPRISE' && 'bg-gradient-to-b from-blue-600 to-blue-400'}
                            `}
                          >
                            {row.tier}
                          </span>
                        </span>
                      </td>

                      {/* Action buttons */}
                      <td className="py-4 px-4 flex gap-3 items-center justify-end text-right">
                        <button className="px-2 py-1 rounded-xl bg-[#202020] hover:bg-[#3a3a3a] text-white text-[13px] font-['Schibsted_Grotesk'] border border-gray-600 transition">
                          View Detail
                        </button>
                        <button
                          className="text-white hover:text-red-400 transition p-1"
                          title="Delete"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}

                  {/* No data row */}
                  {filteredData.length === 0 && (
                    <tr>
                      <td
                        colSpan="6"
                        className="py-6 text-center text-gray-400 font-['Schibsted_Grotesk']"
                      >
                        No records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History; 