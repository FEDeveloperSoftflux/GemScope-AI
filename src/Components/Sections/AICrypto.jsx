import React, { useEffect, useRef, useState } from 'react';
import crypt from '../../assets/Frame.png'; 
import brain from '../../assets/1.svg';
import brain2 from '../../assets/2.svg';
import dashboardIcon from '../../assets/Card1.svg';
import networkIcon from '../../assets/Card2.svg';
import tickIcon from '../../assets/Card3.svg';

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

  // Individual Feature Card Components with responsive dimensions
  const CryptoResearchCard = ({ className = "" }) => (
    <div className={`bg-black rounded-xl p-4 sm:p-5 border border-gray-700/50 
      w-full sm:w-[400px] h-auto sm:h-[160px] ${className}`}>
      <div className="flex items-start gap-3 h-full">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
          <img src={dashboardIcon} alt="Research Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div className="flex-1 overflow-hidden">
          <h3 className="text-white font-medium text-[18px] sm:text-[20px] mb-1 font-['Schibsted_Grotesk'] 
            leading-[28px] sm:leading-[38.4px] tracking-[-0.5px] sm:tracking-[-0.64px]">
            Crypto Research, Decoded:
          </h3>
          <p className="text-gray-400 text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] font-['Lato']">
            Gain a competitive edge with strategic insights that enhance your success rate. GemScope decodes the data and aligns you with reality to stay in control and keep you confident.
          </p>
        </div>
      </div>
    </div>
  );

  const LiveDataAnalysisCard = ({ className = "" }) => (
    <div className={`bg-black rounded-xl p-4 border border-gray-600/50 
      w-full sm:w-[382px] h-auto sm:h-[150px] ${className}`}>
      <div className="flex items-start gap-3 h-full">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0">
          <img src={networkIcon} alt="Live Data Icon" className="w-8 h-8 sm:w-8 sm:h-8" />
        </div>
        <div className="flex-1 overflow-hidden">
          <h3 className="text-white font-medium text-[18px] sm:text-[20px] mb-1 font-['Schibsted_Grotesk'] 
            leading-[28px] sm:leading-[38.4px] tracking-[-0.5px] sm:tracking-[-0.64px]">
            Live Data Analysis
          </h3>
          <p className="text-gray-400 text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] font-['Lato']">
            GemScope streams real time crypto metrics to support well informed and data driven financial decisions.
          </p>
        </div>
      </div>
    </div>
  );

  const SummariesExplainedCard = ({ className = "" }) => (
    <div className={`bg-black backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-600/50  
      w-full sm:w-100 h-auto sm:h-36 ${className}`}>
      <div className="flex items-start gap-3 sm:gap-4 h-full">
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0">
          <img src={tickIcon} alt="Summary Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div className="flex-1 overflow-hidden">
          <h3 className="text-white font-medium text-[18px] sm:text-[20px] mb-1 font-['Schibsted_Grotesk'] 
            leading-[28px] sm:leading-[38.4px] tracking-[-0.5px] sm:tracking-[-0.64px]">
            Summaries Explained
          </h3>
          <p className="text-gray-400 text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] font-['Lato']">
            GemScope gives you clear insights into your current or future investments with high level gem scores and risk flag analysis.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="pl-4 sm:pl-30 bg-black overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-30">
          {/*Left Panel */}
          <div
            className={`transition-all duration-1000 ease-out
              ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 sm:-translate-x-8'}`}
          >
            <h2 className="mb-2 text-white text-left mx-auto font-['Schibsted_Grotesk'] 
              text-[24px] leading-[30px] tracking-tight 
              sm:text-[28px] sm:leading-[34px] sm:tracking-tight 
              md:text-[36px] md:leading-[44px] md:tracking-tight 
              lg:text-[44px] lg:leading-[54px] lg:tracking-tight
              xl:text-[60px] xl:leading-[72px] xl:tracking-[-2.4px] 
              max-w-[945px] font-weight-500">
              AI & Crypto, the new deadly duo.
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <img src={brain} alt="AI Crypto" className="mt-4 sm:mt-5 w-[48px] h-[50px] sm:w-[64px] sm:h-[67px]" />
                <h3 className="text-[24px] sm:text-[32px] text-white mb-2 sm:mb-3 font-['Schibsted_Grotesk'] 
                  mt-4 sm:mt-5 leading-[30px] sm:leading-[38.4px] tracking-[-0.5px] sm:tracking-[-0.64px] 
                  font-weight-500 pr-4 sm:mr-50">
                  AI Is The New Crypto Narrative
                </h3>
                <p className="text-white/60 font-['Lato'] text-[16px] sm:text-[16px] leading-[25.6px] sm:leading-[25.6px] 
                  text-justify pr-4 sm:mr-5 font-weight-200 tracking-tight">
                  The markets move in narratives driven by innovation. Investors are no longer chasing the meme of the month but 
                  rather see AI as the transformative force of the bull cycle.
                </p>
              </div>
              
              <div>
                <img src={brain2} alt="AI Crypto" className="w-[48px] h-[50px] sm:w-[64px] sm:h-[67px]" />
                <h3 className="text-[24px] sm:text-[32px] text-white mb-2 sm:mb-3 font-['Schibsted_Grotesk'] 
                  mt-4 sm:mt-5 leading-[30px] sm:leading-[38.4px] tracking-[-0.5px] sm:tracking-[-0.64px] 
                  font-weight-500 pr-4 sm:mr-50">
                  Combining AI with Cryptocurrency
                </h3>
                <p className="text-white/60 font-['Lato'] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25.6px] 
                  text-justify pr-4 sm:mr-10 font-weight-200 tracking-tight">
                  Whether you're unsure what coin to buy or hold, GemScope provides high level informative data - No experience required. The AI way.
                </p>
              </div>
            </div>
          </div>

          {/*Right Panel */}
          <div
            className={`relative transition-all duration-1000 ease-out mt-8 lg:mt-10
              ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 sm:translate-x-8'}`}
          >
            {/* Container for image and cards */}
            <div className="relative w-full max-w-[477px] mx-auto ">
              {/* Background Image */}
              <img
                src={crypt}
                alt="AI Crypto"
                className="w-full rounded-4xl h-[600px] clear-both"
              />
              
              {/* Feature Cards */}
              <div className="absolute inset-0">
                {/* Mobile/Tablet Layout: Stacked Vertically & Centered */}
                <div className="flex xl:hidden flex-col items-center justify-center h-full gap-6 p-4">
                  <CryptoResearchCard />
                  <LiveDataAnalysisCard />
                  <SummariesExplainedCard />
                </div>

                {/* Desktop Layout: Brick Pattern */}
                <div className="hidden xl:block">
                  <CryptoResearchCard
                    className="absolute top-4 left-4 lg:left-19 transform animate-fade-in-up"
                  />
                  <LiveDataAnalysisCard
                    className="absolute top-64 right-4 lg:right-8 left-auto lg:left-15 transform animate-fade-in-up animation-delay-200"
                  />
                  <SummariesExplainedCard
                    className="absolute top-120 left-80 transform -translate-x-1/2 animate-fade-in-up animation-delay-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICrypto;