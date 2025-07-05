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

// Mobile Card Component
const MobileCard = ({ row, selected, onSelect, onDelete }) => (
  <div className="bg-[#2a2a2a] rounded-lg p-4 mb-3 border border-[#333]">
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-3">
        <CustomCheckbox
          checked={selected.includes(row.id)}
          onChange={() => onSelect(row.id)}
        />
        <span className="text-white/60 text-sm font-['Schibsted_Grotesk']">
          #{row.id.toString().padStart(2, '0')}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span
          className={`
            bg-gradient-to-b 
            ${row.tier === 'Free' && 'from-[#F5DBE0]/5 to-[#C32388]/20'} 
            ${row.tier === 'PRO' && 'from-[#2a1a3c] to-[#181c2b]'} 
            ${row.tier === 'ENTERPRISE' && 'from-[#16213e] to-[#1a2238]'} 
            text-[10px] font-normal rounded-full px-2 py-1 inline-block
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
        <button
          onClick={onDelete}
          className="text-white/60 hover:text-red-400 transition p-1"
          title="Delete"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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
      </div>
    </div>
    
    <div className="mb-3">
      <p className="text-white/80 font-['Schibsted_Grotesk'] text-sm font-light leading-relaxed">
        {row.detail}
      </p>
    </div>
    
    <div className="flex items-center justify-between">
      <span className="text-white/60 text-xs font-['Schibsted_Grotesk']">
        {row.date}
      </span>
      <button className="px-3 py-1.5 rounded-lg bg-[#202020] hover:bg-[#3a3a3a] text-white text-xs font-['Schibsted_Grotesk'] border border-gray-600 transition">
        View Detail
      </button>
    </div>
  </div>
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

  const handleDelete = (id) => {
    // Add delete logic here
    console.log('Delete item:', id);
  };

  const filteredData = dummyData.filter(row =>
    row.detail.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen text-white flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 p-3 sm:p-4 lg:p-6 overflow-y-auto w-full">
        <DHeader title="Historic Prompts" icon={HistoryIcon} plan={plan} setUserPlan={setUserPlan} />
        
        <div className="mt-4 flex flex-col w-full">
          {/* Controls Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-4 w-full">
            {/* Search and Select All - Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:max-w-xl">
              {/* Search Input */}
              <div className="relative w-full sm:w-[180px] lg:ml-2">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <img src={SearchIcon} alt="Search" className="w-4 h-4 ml-2" />
                </span>
                <input
                  type="text"
                  className="w-full h-[45px] pl-10 pr-2 rounded-lg bg-[#202020] border border-[#2e2e2e] placeholder-gray-400 focus:outline-none font-['Schibsted_Grotesk'] text-sm"
                  placeholder="Search"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              
              {/* Select All Checkbox */}
              <label className="flex items-center gap-3 cursor-pointer select-none bg-black px-4 w-full sm:w-[180px] h-[45px] rounded-lg font-['Schibsted_Grotesk'] text-gray-300 hover:bg-gray-950 transition-colors">
                <CustomCheckbox checked={selectAll} onChange={handleSelectAll} />
                <span className="font-['Schibsted_Grotesk'] text-[16px] font-normal text-gray-400">Select All</span>
              </label>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              {/* Delete Button - Only show when items are selected */}
              {selected.length > 0 && (
                <button className="px-4 py-2 rounded-lg bg-white hover:bg-gray-100 text-black text-sm font-normal border border-[#333] font-[Schibsted_Grotesk] flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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
                  <span className="hidden sm:inline">Delete Selected</span>
                </button>
              )}
              
              {/* Export Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#202020] hover:bg-[#2e2e2e] text-white/60 text-sm font-normal border border-[#333] font-[Schibsted_Grotesk] flex items-center justify-center gap-2">
                  <img src={DownloadG} alt="Download" className="w-4 h-4" />
                  <span className="hidden sm:inline">Export PDF</span>
                  <span className="sm:hidden">PDF</span>
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#202020] hover:bg-[#2e2e2e] text-white/60 text-sm font-normal border border-[#333] font-[Schibsted_Grotesk] flex items-center justify-center gap-2">
                  <img src={DownloadG} alt="Download" className="w-4 h-4" />
                  <span className="hidden sm:inline">Export CSV</span>
                  <span className="sm:hidden">CSV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table Container - Now fully responsive and stretchable */}
          <div className="w-full rounded-3xl p-2 sm:p-4 lg:p-6 bg-[#202020] shadow-lg border border-[#23232B]">
            
            {/* Desktop Table View - Hidden on mobile */}
            <div className="hidden lg:block w-full">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm table-auto">
                  <thead>
                    <tr className="bg-black text-white text-sm">
                      <th className="py-2 px-2 font-semibold font-['Schibsted_Grotesk'] bg-black rounded-tl-2xl rounded-bl-2xl w-[40px]"></th>
                      <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400 w-[120px]">Search Number</th>
                      <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400 min-w-[300px]">Search Details</th>
                      <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400 w-[180px]">Date/Time</th>
                      <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400 w-[120px]">Tier</th>
                      <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400 rounded-tr-2xl rounded-br-2xl w-[150px]"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#202020]">
                    {filteredData.map((row, idx) => (
                      <tr key={row.id} className="hover:bg-[#2a2a2a] transition text-white">
                        {/* Checkbox cell */}
                        <td className="py-2 px-2 align-middle">
                          <div className="flex items-center justify-center h-full">
                            <CustomCheckbox
                              checked={selected.includes(row.id)}
                              onChange={() => handleSelect(row.id)}
                            />
                          </div>
                        </td>

                        {/* ID */}
                        <td className="py-4 px-4 text-white/80 font-['Schibsted_Grotesk'] text-[14px] font-light">
                          {row.id.toString().padStart(2, '0')}
                        </td>

                        {/* Detail - This column will expand to fill available space */}
                        <td className="py-4 px-4 text-white/80 font-['Schibsted_Grotesk'] text-[14px] font-light">
                          <div className="break-words">
                            {row.detail}
                          </div>
                        </td>

                        {/* Date */}
                        <td className="py-4 px-4 text-white/80 font-['Schibsted_Grotesk'] text-[14px] font-light whitespace-nowrap">
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
                              text-[12px] font-normal rounded-full px-3 py-1 inline-block whitespace-nowrap
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
                        <td className="py-4 px-4">
                          <div className="flex gap-2 items-center justify-end">
                            <button className="px-2 py-1 rounded-xl bg-[#202020] hover:bg-[#3a3a3a] text-white text-[13px] font-['Schibsted_Grotesk'] border border-gray-600 transition whitespace-nowrap">
                              View Detail
                            </button>
                            <button
                              onClick={() => handleDelete(row.id)}
                              className="text-white hover:text-red-400 transition p-1 flex-shrink-0"
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
                          </div>
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

            {/* Mobile Card View - Hidden on desktop */}
            <div className="lg:hidden">
              {filteredData.length > 0 ? (
                <div className="space-y-3">
                  {filteredData.map((row) => (
                    <MobileCard
                      key={row.id}
                      row={row}
                      selected={selected}
                      onSelect={handleSelect}
                      onDelete={() => handleDelete(row.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-gray-400 font-['Schibsted_Grotesk']">
                  No records found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;