import React from 'react';
import Input from '../../../Common/Input';
import Button from '../../../Common/Button';
import CrossButton from '../../../Common/CrossButton';
import Pin from '../../../../assets/Pin.svg';
import SuccessModal from './SuccessModal';
import { useState, useRef } from 'react';

const SupportModal = ({ open, onClose, email, setEmail, message, setMessage, onSuccess }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [attachedFile, setAttachedFile] = useState(null);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
    }, 500); // Simulate sending
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    if (onSuccess) onSuccess();
  };

  const handlePinClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  if (!open) return null;
  return (
    <>
      {!showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg bg-black/10">
          <div className="bg-[#232323] rounded-2xl p-8 relative max-w-2xl w-full min-h-[400px] shadow-2xl">
            <CrossButton onClick={onClose} className="absolute top-4 right-4" />
            <div className="mb-6">
              <p className="text-[16px] mb-2 font['Schibsted_Grotesk'] font-normal text-gray-400">Please fill out the below form or contact us at <a href="mailto:support@gemscope-ai.com" className="text-gray-200 underline font['Schibsted_Grotesk'] font-normal text-[15px]">support@gemscope-ai.com</a></p>
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full h-12 p-4 bg-[#18181b] font medium border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition-all duration-300 resize-none  font['Schibsted_Grotesk'] "
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="w-full h-40 p-4 bg-[#18181b] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition-all duration-300 resize-none"
              />
            </div>
            <div className="flex justify-end">

            </div>
            {/* Chat-style input bar at the bottom */}
            <div className="absolute left-0 bottom-0 w-full px-8 pb-6">
              <div className="flex items-center bg-white/20 rounded-xl p-1 w-full shadow-inner">
                <span className="pl-2 pr-2 text-gray-400 cursor-pointer" onClick={handlePinClick}>
                  <img src={Pin} alt="Pin" className="w-5 h-5" />
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    className='mr-2'
                    onChange={handleFileChange}
                  />
                </span>
                <input
                  type="text"
                  placeholder="Ask Support"
                  className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2"
                  // You can add value/onChange if you want to control this input
                />
                {attachedFile && (
                  <span className="ml-4 text-xs text-white/80 truncate max-w-[120px]">{attachedFile.name}</span>
                )}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`relative w-[80px] py-1 text-sm sm:text-base font-medium text-black bg-gradient-to-r from-purple-400 via-white to-pink-300 
                  rounded-xl shadow-black/60 drop-shadow-lg transition-all duration-300 ease-in-out active:scale-95 font-['Schibsted Grotesk'] shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <SuccessModal open={showSuccess} onClose={handleSuccessClose} />
    </>
  );
};

export default SupportModal; 