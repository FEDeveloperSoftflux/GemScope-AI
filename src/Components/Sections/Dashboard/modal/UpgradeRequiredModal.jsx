import React from 'react';
import CrossButton from '../../../Common/CrossButton';
import Crown from '../../../../assets/Crown.svg';
import Lightning from '../../../../assets/Lightining.svg';

const UpgradeRequiredModal = ({ open, onClose, onUpgrade, onMaybeLater }) => {
  if (!open) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur">
      <div className="bg-[#202020] rounded-3xl shadow-2xl p-10 w-[500px] relative flex flex-col items-center">
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <CrossButton onClick={onClose} />
        </div>
        {/* Title */}
        <h2 className="text-white text-xl font-medium mb-8 w-full text-left font-['Schibsted_Grotesk']">Upgrade Required</h2>
        {/* Icon */}
        <div className="flex justify-center items-center mb-6">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl border-2 border-[#444] bg-transparent">
            <img src={Lightning} alt="Lightning" className="w-10 h-10" />
          </div>
        </div>
        {/* Main Message */}
        <div className="text-center mb-2">
          <div className="text-white text-xl font-medium font-['Schibsted_Grotesk'] mb-2 mt-5">
            You have hit your AI prompt limit
          </div>
          <div className="text-white/70 text-[12px] font-['Lato'] pl-10 pr-10">
            To activate AI again, please upgrade now and unlock unlimited scanning power!
          </div>
        </div>
        {/* Upgrade Now Button */}
        <button
          className="w-full mt-8 py-2 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 text-black shadow-lg transition hover:scale-105"
          style={{
            boxShadow: '0 4px 24px 0 rgba(236, 72, 153, 0.15)',
            background: 'radial-gradient(circle at left, #a78bfa 0%, #fff 40%), radial-gradient(circle at right, #f9a8d4 0%, #fff 40%), #fff',
            backgroundBlendMode: 'lighten'
          }}
          onClick={onUpgrade}
        >
          <img src={Crown} alt="Crown" className="w-5 h-5" />
          <span className="font-['Schibsted_Grotesk'] font-medium text-[15px]">Upgrade Now</span>
        </button>
        {/* Maybe Later Button */}
        <button
          className="w-full mt-4 py-2 rounded-2xl flex items-center justify-center gap-2 bg-[#232323] text-white/90 shadow transition hover:bg-[#333]"
          onClick={onMaybeLater}
        >
          <span className="font-['Schibsted_Grotesk'] font-medium text-[15px]">May be Later</span>
        </button>
      </div>
    </div>
  );
};

export default UpgradeRequiredModal; 