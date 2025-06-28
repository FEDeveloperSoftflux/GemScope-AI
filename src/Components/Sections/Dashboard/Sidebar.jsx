import React, { useState, useEffect } from 'react';
import {Sun, Moon, Menu } from 'lucide-react';
import Background from '../../../assets/Background.png';
import LogoImg from '../../../assets/Logo.png';
import Account from '../../../assets/Account.svg';
import Billing from '../../../assets/Billing.svg';
import History from '../../../assets/History.svg';
import Activate from '../../../assets/ActivateAI.svg';
import Dashboard from '../../../assets/Dashboard.svg';
import { Link } from 'react-router-dom';

// Logo Component
const Logo = () => (
  <div className="flex items-center gap-2 mb-8">
    <Link to="/">
      <img src={LogoImg} alt="GemScope AI Logo" className="w-10 h-10 object-contain rounded-lg font-['Schibsted Grotesk'] " />    </Link>
      <span className="text-lg font-semibold text-white">GemScope AI</span>

  </div>
);

// Navigation Item Component
const NavItem = ({ icon, label, active }) => (
  <div
    className={`px-4 py-3 flex items-center gap-3 rounded-xl transition-colors cursor-pointer relative 
      ${active ? 'bg-gradient-to-r from-purple-400 via-white to-pink-300 text-black shadow-lg' : 'hover:bg-white/10 text-white/80'}
    `}
    style={active ? { boxShadow: '0 4px 24px 0 rgba(236, 72, 153, 0.15)' } : {}}
  >
    {typeof icon === 'string' ? (
      <img src={icon} alt={label + ' icon'} className={`w-5 h-5 object-contain ${active ? 'filter invert-0 brightness-0' : ''}`} />
    ) : (
      icon && <icon.type size={20} color={active ? 'black' : undefined} />
    )}
    <span className="font-semibold font-['Schibsted Grotesk'] font-weight-500 text-[16px] leading-[26px] tracking-[-0.4px]">{label}</span>
  </div>
);

// Main Sidebar Component
const Sidebar = () => {
  const navItems = [
    { icon: Dashboard, label: 'Dashboard' },
    { icon: Activate, label: 'Activate AI' },
    { icon: History, label: 'History' },
    { icon: Billing, label: 'Billing' },
    { icon: Account, label: 'Account' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [mode, setMode] = useState('dark');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return (
    <>
      {/* Hamburger for mobile */}
      {/*<button
        className="fixed top-4 left-4 z-50 md:hidden bg-black/80 p-2 rounded-lg shadow-lg"
        onClick={() => setMobileOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu size={28} className="text-white" />
      </button>*}

      {/* Mobile overlay 
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}*/}

      {/* Single Sidebar - responsive */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full w-64 bg-black p-6 z-50
          transform transition-transform duration-300
          md:transform-none md:translate-x-0
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          rounded-r-3xl md:rounded-r-3xl
          relative overflow-hidden
        `}
      >
        {/* Close button for mobile */}
        <button
          className="absolute top-4 right-4 md:hidden text-white text-2xl z-20"
          onClick={() => setMobileOpen(false)}
          aria-label="Close sidebar"
        >
          &times;
        </button>

        {/* Background image */}
        <img
          src={Background}
          alt="Background"
          className="absolute bottom-0 left-0 w-full h-50 object-cover z-0"
          style={{ pointerEvents: 'none' }}
        />

        {/* Sidebar content */}
        <div className="relative z-10 flex flex-col h-full overflow-y-auto max-h-[90vh] mb-6 ">
          <Logo />
          <nav className="space-y-2 flex-1">
            {navItems.map((item, index) => (
              <div key={index} onClick={() => setActiveIndex(index)}>
                <NavItem 
                  icon={item.icon} 
                  label={item.label} 
                  active={activeIndex === index} 
                />
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;