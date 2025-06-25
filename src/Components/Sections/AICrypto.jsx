import React from 'react';
import crypt from '../../assets/Side.png'; 
import brain from '../../assets/1.svg';
import brain2 from '../../assets/2.svg';
const AICrypto = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          <div>
            <h2 className="mb-6 text-white font-light text-left  font-['Schibsted_Grotesk']
           text-[35px] sm:text-[35px] sm:leading-[36.8px] md:text-[54px] md:leading-[64.8px] md-tracking-[-2.16px] lg:text-[60px] lg:leading-[70.4px] lg:tracking-normal max-w-[945px]">
             AI & Crypto, the new deadly duo.
          </h2>
            
            <div className="space-y-8">
              <div>
                {<img src={brain} alt="AI Crypto" className="w-[64px] h-[67px]" />}
                <h3 className="text-[25px] font-medium text-white mb-3 font-['Schibsted_Grotesk']">
                  AI Is The New Crypto Narrative
                </h3>
                <p className="text-gray-300 font-['Lato'] text-[12px] leading-[24px] tracking-[0.18px]">
                  The intersection of artificial intelligence and cryptocurrency represents the next major market evolution. 
                  Our platform harnesses this convergence to deliver unprecedented insights.
                </p>
              </div>
              
              <div>
                {<img src={brain2} alt="AI Crypto" className="w-[64px] h-[67px]" />}
                <h3 className="text-[25px] font-medium text-white mb-3 font-['Schibsted_Grotesk']">
                  Combining AI with Cryptocurrency
                </h3>
                <p className="text-gray-300 font-['Lato'] text-[12px] leading-[24px] tracking-[0.18px]">
                  Advanced neural networks process vast amounts of market data, social sentiment, and on-chain metrics 
                  to identify patterns invisible to human analysis.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={crypt}
              alt="AI Crypto"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICrypto;