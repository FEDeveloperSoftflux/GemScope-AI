import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Centered Logo and Brand Side by Side */}
        <div className="flex flex-row items-center justify-center mb-5 space-x-1">
          <img src={Logo} alt="GemScope AI Logo" className="w-10 h-10" />
          <span className="text-white text-[22px] font-['Schibsted_Grotesk'] font-weight-700 leading-[26px] tracking-[-0.4px]">GemScope AI</span>
        </div>
        {/* Divider */}
        <div className="w-full border-t border-white/20 my-1 align-center" />
        {/* Links */}
        <div className="flex space-x-8 mt-10">
          <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors font-['Lato'] text-[16px] leading-[20px] mb-4">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-300 hover:text-white transition-colors font-['Lato'] text-[16px] leading-[20px] mb-4">Terms & Conditions</Link>
        </div>
        {/* Copyright */}
        <p className="text-gray-400 text-center text-sm font-['Lato'] text-[16px] leading-[25.6px]">
          © 2025 GemScope AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;