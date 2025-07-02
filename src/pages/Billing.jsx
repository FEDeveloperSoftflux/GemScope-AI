import React, { useState } from 'react';
import Sidebar from '../Components/Sections/Dashboard/Sidebar';
import DHeader from '../Components/Sections/Dashboard/DHeader';
import BillingIcon from '../assets/Billing.svg';
import SearchIcon from '../assets/Search.svg';
import CalenderIcon from '../assets/Calender.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const dummyData = [
  { id: 3, tier: 'Pro', amount: '£20', date: '02-05-2025' },
  { id: 2, tier: 'Enterprise', amount: '£50', date: '02-05-2025' },
  { id: 1, tier: 'Lifetime', amount: '£150', date: '02-05-2025' },
];

const tierColors = {
  'Free': 'bg-purple-900 text-purple-200',
  'PRO': 'bg-purple-700 text-purple-100',
  'ENTERPRISE': 'bg-blue-900 text-blue-200',
};

const Billing = ({ plan = "free", setUserPlan }) => {
  const [search, setSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const filteredData = dummyData.filter(row =>
    row.tier.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen text-white flex">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <DHeader title="Billing" icon={BillingIcon} plan={plan} setUserPlan={setUserPlan} />
        <div className="mt-4 flex flex-col w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 max-w-xl mr-8">
              <div className="relative w-[180px] ml-8">
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
            </div>
            <div className="flex gap-2 items-center">
              <div className="relative">
                <button
                  className="flex items-center px-4 py-2 rounded-lg bg-[#202020] hover:bg-[#2e2e2e] text-white/60 text-sm font-normal border border-[#333] font-[Schibsted_Grotesk] mr-10 min-w-[150px]"
                  onClick={() => setShowDatePicker((prev) => !prev)}
                  type="button"
                >
                  <span className="mr-2">{selectedDate.toISOString().split('T')[0]}</span>
                  <img src={CalenderIcon} alt="Calendar" className="w-5 h-5 ml-2" />
                </button>
                {showDatePicker && (
                  <div className="absolute right-0 mt-2 z-50">
                    <DatePicker
                      selected={selectedDate}
                      onChange={date => { setSelectedDate(date); setShowDatePicker(false); }}
                      inline
                      calendarClassName="custom-datepicker-calendar"
                      dayClassName={() => 'custom-datepicker-day'}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl mx-auto rounded-3xl p-6 bg-[#202020] shadow-lg border border-[#23232B]">
          <div className="overflow-x-auto">
 <table className="min-w-full text-left">
   <thead>
     <tr className="bg-black text-white text-sm">
       <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400 rounded-tl-2xl rounded-bl-2xl text-center">Payment Number</th>
       <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center">Subscription Plan</th>
       <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center">Total Amount</th>
       <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400 text-center">Date/Time</th>
       <th className="py-2 px-4 font-normal font-['Schibsted_Grotesk'] text-gray-400 rounded-tr-2xl rounded-br-2xl pl-21">Invoice</th>
     </tr>
   </thead>
      <tbody className="bg-[#202020]">
      {filteredData.map((row, idx) => (
        <tr key={row.id} className="hover:bg-[#2a2a2a] transition text-white">
          {/* Payment Number */}
          <td className="py-4 px-4 text-white/80 font-['Schibsted_Grotesk'] text-[14px] font-light text-center">
            {row.id.toString().padStart(2, '0')}
          </td>
          {/* Subscription Plan */}
          <td className="py-4 px-4 text-white/80 font-['Schibsted_Grotesk'] text-[14px] font-light text-center">
            {row.tier}
          </td>
          {/* Total Amount */}
          <td className="py-4 px-4 text-white/80 font-['Schibsted_Grotesk'] text-[14px] font-light text-center">
            {row.amount}
          </td>
          {/* Date/Time */}
          <td className="py-4 px-4 text-white/80 font-['Schibsted_Grotesk'] text-[14px] text-center">
            {row.date}
          </td>
          {/* Invoice */}
          <td className="py-4 px-4">
            <div className="flex items-center justify-between w-full">
              <div className="mx-auto">
                <button className="px-2 py-1 rounded-xl bg-[#202020] hover:bg-[#3a3a3a] text-white text-[13px] font-['Schibsted_Grotesk'] border border-gray-600 transition">
                  View Invoice
                </button>
              </div>
              <span className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
              </span>
            </div>
          </td>
        </tr>
      ))}

      {/* No data row */}
      {filteredData.length === 0 && (
        <tr>
          <td
            colSpan="5"
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

export default Billing; 