import React, { useEffect, useState } from 'react';
import CrossButton from '../../../Common/CrossButton';

const AIAnalysisModal = ({ open, onClose, plan = 'Free Tier', promptsRemaining = 3, progress = 100 }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (!open) {
      setAnimatedProgress(0);
      return;
    }
    if (animatedProgress < 100) {
      const timeout = setTimeout(() => {
        setAnimatedProgress(prev => Math.min(prev + 1, 100));
      }, 100); // Adjust speed here
      return () => clearTimeout(timeout);
    } else if (animatedProgress === 100) {
      // Wait a moment, then close the modal
      const closeTimeout = setTimeout(() => {
        onClose();
      }, 500); // 0.5s after reaching 100%
      return () => clearTimeout(closeTimeout);
    }
  }, [animatedProgress, open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur">
      <div className="bg-[#202020] rounded-3xl shadow-2xl p-10 w-[600px] relative flex flex-col items-center">
        {/* Plan and Prompts Remaining */}
        <div className="flex flex-row items-center w-full mb-8">
          <span className=" text-white text-xl font-medium font-['Schibsted_Grotesk']">{plan}</span>
          <span
            className="px-4 py-1 rounded-full text-sm font-normal shadow-lg font-['Schibsted_Grotesk'] ml-4"
            style={{
              background: 'rgba(120, 58, 129, 0.18)', // translucent purple
              color: '#d48aff', // soft pink
            }}
          >
            {promptsRemaining} AI Prompts Remaining
          </span>
        </div>
        {/* Analysis Text */}
        <div className="w-full flex flex-col items-left mb-8">
          <span className="text-white text-xl font-medium  font-['Schibsted_Grotesk']">AI Analysis in Progress</span>
        </div>
        {/* Animated Progress Bar */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full h-5 bg-black rounded-full overflow-hidden relative">
            <div
              className="h-full absolute left-0 top-0 transition-all duration-500"
              style={{
                width: `${animatedProgress}%`,
                background: 'linear-gradient(90deg, #FF6CFB 0%, #9708D5 50%, #08088F 100%)',
                borderRadius: '9999px',
              }}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg font-medium font-['Schibsted_Grotesk']">{animatedProgress}%</span>
          </div>
        </div>
        {/* CrossButton for closing */}
        <div className="absolute top-4 right-4">
          <CrossButton onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default AIAnalysisModal; 