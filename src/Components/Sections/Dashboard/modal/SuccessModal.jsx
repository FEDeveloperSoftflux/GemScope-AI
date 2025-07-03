import React from 'react';
import CrossButton from '../../../Common/CrossButton';
import Tick from '../../../../assets/Tick.svg';

const SuccessModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg bg-black/10">
      <div className="bg-[#232323] rounded-2xl p-8 relative max-w-md w-full flex flex-col items-center shadow-2xl">
        <CrossButton onClick={onClose} className="absolute top-4 right-4" />
        <div className="mt-8 mb-6 text-center">
          <span className="text-[30px] font-medium text-white font-['Schibsted_Grotesk']">Successfully Sent</span>
        </div>
        <div className="flex justify-center items-center mb-8">
          <span className="bg-[#06B46B] rounded-full p-4 flex items-center justify-center">
            <img src={Tick} alt="Success" className="w-10 h-10" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal; 