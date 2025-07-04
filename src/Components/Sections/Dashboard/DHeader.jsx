import React, { useState, useRef, useEffect } from 'react';
import House from '../../../assets/Dashboard.svg';

const planColors = {
  free: "bg-gradient-to-b from-pink-400 to-pink-100 bg-clip-text text-transparent",
  pro: "bg-gradient-to-b from-purple-700 to-purple-100 bg-clip-text text-transparent",
  enterprise: "bg-gradient-to-b from-blue-700 to-blue-100 bg-clip-text text-transparent"
};

const DHeader = ({ user, title = "Dashboard", icon, plan = "free", setUserPlan }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notifRef = useRef(null);
  const [userData, setUserData] = useState(user || null);
  const [loading, setLoading] = useState(!user);

  // Placeholder for backend API integration
  useEffect(() => {
    if (!user) {
      setLoading(true);
      // Simulated API response delay
      setTimeout(() => {
        setUserData({
          name: 'John Doe',
          email: 'johndoe@example.com',
        });
        setLoading(false);
      }, 1000);
    }
  }, [user]);

  // Close dropdown and notification when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 mb-6 w-full px-2 sm:px-0">
      <div className="flex items-center gap-2 sm:gap-4 w-auto">
        <div className="w-6 h-6 flex items-center justify-center border-2 border-gray-500 rounded-md bg-black ml-2 sm:ml-10">
          {icon ? (
            <img src={icon} alt="Icon" className="w-2 h-2" />
          ) : (
            <img src={House} alt="House" className="w-2 h-2" />
          )}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
        <h1 className="text-base sm:text-lg font-bold text-white font-['Schibsted_Grotesk']">{title}</h1>
<div className="px-1.5 sm:px-2 py-0.5 sm:py-0.5 rounded-full bg-gradient-to-r from-[#2A1A2E] to-[#232026] flex items-center mt-1 relative">
  <span
    className={`text-[10px] sm:text-xs font-medium font-['Schibsted_Grotesk'] ${planColors[plan]}`}
  >
    {plan === 'free' && 'Free Plan'}
    {plan === 'pro' && 'Pro Plan'}
    {plan === 'enterprise' && 'Enterprise Plan'}
  </span>
  {setUserPlan && (
    <div className="relative ml-2 flex items-center">
      <select
        value={plan}
        onChange={e => setUserPlan(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-white bg-[#202020]rounded-full"
        aria-label="Change plan"
      >
        <option value="free" className="text-white bg-black font-['Schibsted_Grotesk'] text-[15px]">Free</option>
        <option value="pro" className="text-white bg-black font-['Schibsted_Grotesk']text-[15px]">Pro</option>
        <option value="enterprise" className="text-white bg-black font-['Schibsted_Grotesk'] text-[15px]">Enterprise</option>
      </select>
      <span className="text-xs text-white pointer-events-none z-10 ml-1">▼</span>
    </div>
  )}
</div>
        </div>
      </div>
      {/* Desktop: Notification and Profile */}
      <div className="hidden sm:flex items-center bg-black/60 rounded-lg px-2 sm:px-4 py-2 relative min-w-[180px] sm:min-w-[220px] max-w-full sm:max-w-[250px] mt-2 sm:mt-0 font-['Schibsted_Grotesk']" ref={dropdownRef}>
        {/* Bell Icon with Notification Dot */}
        <div className="relative flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-white/10 rounded-full mr-2 sm:mr-3 cursor-pointer" onClick={() => setNotifOpen((open) => !open)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 border-2 border-black rounded-full"></span>
          {/* Notification Panel */}
          {notifOpen && (
            <div ref={notifRef} className="absolute right-0 top-12 mt-2 w-64 sm:w-72 bg-[#18181b] border border-white/10 rounded-xl shadow-2xl z-50 animate-fade-in p-4">
              <h3 className="text-white font-semibold mb-2 font-['Schibsted_Grotesk']">Notifications</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm bg-white/5 rounded p-2 font-['Schibsted_Grotesk']">No new notifications.</li>
              </ul>
            </div>
          )}
        </div>
        {/* User Info */}
        <div className="flex flex-col justify-center cursor-pointer select-none" onClick={() => setDropdownOpen((open) => !open)}>
          <span className="text-sm sm:text-base font-bold text-white leading-tight">
            {loading ? <span className="bg-gray-700 rounded w-12 sm:w-16 h-4 inline-block animate-pulse"></span> : userData?.name}
          </span>
          <span className="text-xs text-gray-400 -mt-0.5">
            {loading ? <span className="bg-gray-800 rounded w-20 sm:w-24 h-3 inline-block animate-pulse"></span> : userData?.email}
          </span>
        </div>
        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 top-14 mt-2 w-36 sm:w-40 bg-[#18181b] border border-white/10 rounded-lg shadow-lg z-50 animate-fade-in">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-white/10 text-white cursor-pointer font-semibold font-['Schibsted_Grotesk']">Profile</li>
              <li className="px-4 py-2 hover:bg-white/10 text-white cursor-pointer font-semibold font-['Schibsted_Grotesk']">Settings</li>
              <li className="px-4 py-2 hover:bg-white/10 text-red-400 cursor-pointer font-semibold font-['Schibsted_Grotesk']">Logout</li>
            </ul>
          </div>
        )}
      </div>
      {/* Mobile: Combined Dropdown */}
      <div className="flex sm:hidden items-center relative ml-2" ref={dropdownRef}>
        <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full cursor-pointer" onClick={() => setDropdownOpen((open) => !open)}>
          {/* User avatar or icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        {dropdownOpen && (
          <div className="absolute right-0 top-12 mt-2 w-64 bg-[#18181b] border border-white/10 rounded-xl shadow-2xl z-50 animate-fade-in p-4">
            {/* Notifications */}
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Notifications
            </h3>
            <ul className="space-y-2 mb-4">
              <li className="text-gray-300 text-sm bg-white/5 rounded p-2">No new notifications.</li>
            </ul>
            {/* Profile Actions */}
            <ul className="py-2 border-t border-white/10">
              <li className="px-4 py-2 hover:bg-white/10 text-white cursor-pointer font-semibold">Profile</li>
              <li className="px-4 py-2 hover:bg-white/10 text-white cursor-pointer font-semibold">Settings</li>
              <li className="px-4 py-2 hover:bg-white/10 text-red-400 cursor-pointer font-semibold">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DHeader;