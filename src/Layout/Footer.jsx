import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Centered Logo and Brand Side by Side */}
        <div className="flex flex-row items-center justify-center mb-6 space-x-3">
          <img src={Logo} alt="GemScope AI Logo" className="w-15 h-15" />
          <span className="text-white font-bold text-2xl">GemScope AI</span>
        </div>
        {/* Divider */}
        <div className="w-full border-t border-white/10 my-6" />
        {/* Links */}
        <div className="flex space-x-8 mb-4">
          <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-base">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-base">Terms & Conditions</Link>
        </div>
        {/* Copyright */}
        <p className="text-gray-400 text-center text-sm">
          © 2025 GemScope AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;