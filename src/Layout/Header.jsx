import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/Logo.svg'; 

const Header = () => {
  const location = useLocation();
  const isSpecialPage = location.pathname === '/privacy' || location.pathname === '/terms';

  return (
    <header className="fixed top-0 w-full h-[60px] md:h-[100px] z-50 bg-black/80 backdrop-blur-md border-b">
      <div className="w-full px-4 md:px-10">
        {/* Header Row: Logo left, Login right (only on non-special pages) */}
        {!isSpecialPage && (
          <div className="flex items-center justify-between w-full h-full py-3 md:py-6">
            {/* Logo Container */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-[50.6px] h-[42.31px] " />
              <span className="font-['Schibsted_Grotesk']  text-white text-[25px] leading-[18px] tracking-[-0.28px]  font-weight-800">
                GemScope AI
              </span>
            </div>
            {/* Login Button - Always visible, responsive sizing */}
            <div className="font-schibsted">
              <Link to="/login">
              <button className="relative px-10 py-2 text-[16px] font-medium  text-black bg-gradient-to-r from-purple-400 via-white to-pink-300 rounded-xl 
           shadow-black/60 drop-shadow-lg transform transition-all duration-300 ease-in-out active:scale-95
           font-['Schibsted_Grotesk'] shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)]">
        Login
      </button>
              </Link>
            </div>
          </div>
        )}
        {/* Special page centering (only on special pages) */}
        {isSpecialPage && (
          <div className="flex justify-center items-center h-full py-3 md:py-6">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-6 h-6 md:w-[50px] md:h-[42.31px]" />
              <span className="text-white text-[25px] leading-[18px] tracking-[-0.28px]"  style={{ fontFamily: 'Schibsted Grotesk' }}>GemScope AI</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;