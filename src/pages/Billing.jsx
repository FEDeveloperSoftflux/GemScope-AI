import React, { useState } from 'react';
import Sidebar from '../Components/Sections/Dashboard/Sidebar';
import DHeader from '../Components/Sections/Dashboard/DHeader';
import BillingIcon from '../assets/Billing.svg';
import SearchIcon from '../assets/Search.svg';
import CalenderIcon from '../assets/Calender.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PricingModal from '../Components/Sections/Dashboard/modal/PricingModal.jsx';

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

const pricingPlans = [
  {
    name: "Free Tier",
    price: "0",
    period: "Month",
    features: [
      "Project Tokenomics",
      "3 AI Prompt Searches/Month",
    ],
    color: "bg-[linear-gradient(360deg,_#F5DBE0_-21.35%,_#C32388_104.32%)]",
    popular: false,
    iconBg :"bg-pink-400/40"
  },
  {
    name: "Pro Tier",
    price: "20",
    period: "Month",
    features: [
      "Everything in Free +",
      "Social Engagement Scores",
      "5 Exchange Listing Options",
      "CEX & DEX Liquidity Volume",
      "Code Base Reddit Link Summary",
      "30 AI Prompt Searches/Month",
    ],
    color: "bg-[linear-gradient(180deg,_#7F00CE_-4.81%,_#EED4FF_125.36%)]",
    popular: false,
    iconBg :"bg-purple-400/40"
  },
  {
    name: "Enterprise Tier",
    price: "50",
    period: "Month",
    features: [
      "Everything In Pro +",
      "Team Analysis",
      "Bot Detection",
      "Developer Activity",
      "AI Whitepaper Analysis",
      "Gem Score + AI Summary",
      "Red Flag Risk Score + AI Concern Report",
      "Unlimited AI Prompt Searches/Month.",
      "Dashboard Features"
    ],
    color: "bg-[linear-gradient(180.57deg,_#0808FF_-4.69%,_#4EBBFF_130.44%)]",
    popular: true,
    iconBg :"bg-blue-400/40"
  },
  {
    name: "Lifetime Enterprise Tier",
    price: "150",
    period: "Lifetime",
    features: [
      "A Lifetime Of Enterprise Services",
      "One Off Payment",
      "Saves You Money + Instant Access"
    ],
    color: "bg-[linear-gradient(179.59deg,_#C4A502_-5.34%,_#FFF3B6_114.16%)]",
    popular: false,
    iconBg :"bg-yellow-400/40"
  }
];

const Billing = ({ plan = "free", setUserPlan }) => {
  const [search, setSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);

  const filteredData = dummyData.filter(row =>
    row.tier.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen text-white flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto w-full">
        <DHeader title="Billing" icon={BillingIcon} plan={plan} setUserPlan={setUserPlan} />
        {plan === 'free' ? (
          <>
            <div className="my-4 p-4 text-gray-200/50 rounded-xl text-center font-medium font-['Schibsted_Grotesk']">
              This is a Free Plan Subscription, therefore no payments are made
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="relative px-10 py-2 text-[16px] font-medium text-black bg-gradient-to-r from-purple-400 via-white to-pink-300 rounded-xl shadow-black/60 drop-shadow-lg transform transition-all duration-300 ease-in-out active:scale-95 font-['Schibsted_Grotesk'] shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)]"
                onClick={() => setShowPricingModal(true)}
              >
                Upgrade Plan
              </button>
            </div>
          </>
        ) : (
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
              </div>
              <div className="flex flex-wrap gap-2 w-full md:w-auto items-center justify-end md:justify-start">
                <div className="relative">
                  <button
                    className="flex items-center px-4 py-2 rounded-lg bg-[#202020] hover:bg-[#2e2e2e] text-white/60 text-sm font-normal border border-[#333] font-[Schibsted_Grotesk] min-w-[150px]"
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
            <div className="w-full max-w-6xl mx-auto rounded-3xl p-2 sm:p-4 md:p-6 bg-[#202020] shadow-lg border border-[#23232B]">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-xs sm:text-sm md:text-base">
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
        )}
      </div>
      <PricingModal show={showPricingModal} onClose={() => setShowPricingModal(false)} pricingPlans={pricingPlans} fromBilling={true} />
    </div>
  );
};

export default Billing; 