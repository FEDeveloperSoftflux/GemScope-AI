import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import Button from '../Components/Common/Button';
import logo from '../assets/logo.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isSpecialPage = location.pathname === '/privacy' || location.pathname === '/terms';

  return (
    <header className="fixed top-0 w-full h-[60px] md:h-[100px] z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-10">
        {/* Header Row: Logo left, Login right */}
        <div className="flex items-center justify-between w-full">
          {/* Logo Container */}
          <div className="flex items-center space-x-2 mt-5">
            <img src={logo} alt="Logo" className="w-8 h-8 md:w-[50px] md:h-[42.31px]" />
            <span className="text-white font-Poppins text-lg md:text-[29px]">GemScope AI</span>
          </div>
          {/* Login Button Right */}
          {!isSpecialPage && (
            <div className="flex items-center mt-5">
              <Link to="/login">
                <Button size="sm">Login</Button>
              </Link>
            </div>
          )}
        </div>
        
        {/* Special page centering */}
        {isSpecialPage && (
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-8 h-8 md:w-[50px] md:h-[42.31px]" />
              <span className="text-white font-Poppins text-lg md:text-[29px]">GemScope AI</span>
            </div>
          </div>
        )}
      </div>
      {/* Sidebar Drawer for Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          {/* Sidebar */}
          <div className="ml-auto w-64 h-full bg-black shadow-lg p-6 flex flex-col items-end animate-slide-in-right">
            <button
              className="mb-6 text-white"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
            {!isSpecialPage && (
              <Link to="/login" className="w-full">
                <Button size="sm" className="w-full">Login</Button>
              </Link>
            )}
          </div>
        </div>
      )}
      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1) forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;