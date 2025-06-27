import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from '../Components/Common/Button';
import logo from '../assets/logo.png'; 

const Header = () => {
  const location = useLocation();
  const isSpecialPage = location.pathname === '/privacy' || location.pathname === '/terms';

  return (
    <header className="fixed top-0 w-full h-[60px] md:h-[100px] z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-4 md:px-10">
        {/* Header Row: Logo left, Login right (only on non-special pages) */}
        {!isSpecialPage && (
          <div className="flex items-center justify-between w-full h-full py-3 md:py-6">
            {/* Logo Container */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-6 h-6 md:w-[50px] md:h-[42.31px]" />
              <span className="text-white font-normal text-sm md:text-[29px] leading-[14px] md:leading-[18px] tracking-[-0.14px] md:tracking-[-0.28px]"  style={{ fontFamily: 'Schibsted Grotesk' }}>
                GemScope AI
              </span>
            </div>
            {/* Login Button - Always visible, responsive sizing */}
            <div className="font-schibsted">
              <Link to="/login">
                <Button size="xs" className="text-xs px-3 py-1 md:text-base md:px-6 md:py-2" >
                  <span className="text-black"style={{ fontFamily: 'Schibsted Grotesk' }}>
                    Login
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        )}
        {/* Special page centering (only on special pages) */}
        {isSpecialPage && (
          <div className="flex justify-center items-center h-full py-3 md:py-6">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-6 h-6 md:w-[50px] md:h-[42.31px]" />
              <span className="text-white font-schibsted text-sm md:text-[29px]" style={{ fontFamily: 'Schibsted Grotesk' }}>GemScope AI</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;