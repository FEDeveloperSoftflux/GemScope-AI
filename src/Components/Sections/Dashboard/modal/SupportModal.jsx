import React from 'react';
import CrossButton from '../../../Common/CrossButton';

const SupportModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg bg-black/10">
      <div className="bg-[#232323] rounded-2xl p-8 relative max-w-md w-full flex flex-col items-center shadow-2xl">
        <CrossButton onClick={onClose} className="absolute top-4 right-2" />
        <div className="mt-8 mb-6 text-center">
          <span className="text-[20px] font-normal text-white font-['Schibsted_Grotesk']">
            Please directly email <a href="mailto:support@gemscope-ai.com" className="underline text-blue-300">support@gemscope-ai.com</a> and we will get back to you as soon as possible.
          </span>
        </div>
        <div className="mb-4 text-center">
          <span className="text-[16px] text-gray-300 font-['Schibsted_Grotesk']">
            To help us serve you quickly and effectively, make sure to include your full webpage name and subscription tier in the subject line.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SupportModal; 