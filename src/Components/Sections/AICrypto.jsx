import React, { useEffect, useRef, useState } from 'react';
import crypt from '../../assets/Side.png'; 
import brain from '../../assets/1.svg';
import brain2 from '../../assets/2.svg';

const AICrypto = () => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pl-30 bg-black overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30">
          <div
            className={`transition-all duration-1000 ease-out
              ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 sm:-translate-x-8'}`}
          >
            <h2 className="mb-6 text-white font-light text-left font-['Schibsted_Grotesk']  
            sm:text-[35px] sm:leading-[36.8px] md:text-[54px] md:leading-[64.8px] md:tracking-[-2.16px] 
            lg:text-[54px] lg:leading-[64.8x] lg:tracking-[-2.16px] max-w-[945px]">
              AI & Crypto, the new deadly duo.
            </h2>
            
            <div className="space-y-8">
              <div>
                <img src={brain} alt="AI Crypto" className="w-[64px] h-[67px]" />
                <h3 className="text-[32px]  text-white mb-3 font-['Schibsted_Grotesk'] mt-5 leading-[38.4px] tracking-[-0.64px] font-weight-500 mr-50">
                  AI Is The New Crypto Narrative
                </h3>
                <p className="text-white/60 font-['Lato'] text-[16px] leading-[25.6px] tracking-[0px] text-justify mr-10 font-weight-400">
                The markets move in narratives driven by innovation. Investors are no longer chasing the meme of the month but 
                rather see AI as the transformative force of the bull cycle.
                </p>
              </div>
              
              <div>
                <img src={brain2} alt="AI Crypto" className="w-[64px] h-[67px]" />
                <h3 className="text-[32px]  text-white mb-3 font-['Schibsted_Grotesk'] mt-5 leading-[38.4px] tracking-[-0.64px] font-weight-500 mr-50">
                  Combining AI with Cryptocurrency
                </h3>
                <p className="text-white/60 font-['Lato'] text-[16px] leading-[25.6px] tracking-[0px] text-justify mr-10 font-weight-400">
                Whether you're unsure what coin to buy or hold, GemScope provides high level informative data - No experience required. The AI way.
                </p>
              </div>
            </div>
          </div>
          
          <div
            className={`relative transition-all duration-1000 ease-out
              ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 sm:translate-x-8'}`}
          >
            <img
              src={crypt}
              alt="AI Crypto"
              className="w-full h-[600px] rounded-lg shadow-lg mt-11 mb-10 "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICrypto;