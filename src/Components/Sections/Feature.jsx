import React from 'react';
import FeatureCard from './FeatureCard';
import Lunar from '../../assets/Lunar.png' ;
import Dextool from '../../assets/Dextool.png';
import Reddit from '../../assets/Reddit.png';
import OpenAI from '../../assets/OpenAI.png';
import CoinGecko from '../../assets/CoinGecko.png';


const Features = ({ features = [] }) => {
  return (
    <section id="features" className="py-20  relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="mb-2 text-white font-light text-center mx-auto font-['Schibsted_Grotesk' mt-[10px]
          text-[28px] tracking-tight sm:text-[36px] sm:leading-[44px] sm:tracking-tight md:text-[44px] md:leading-[54px] md:tracking-tight 
          lg:text-[50px] lg:leading-[72px] lg:tracking-[-2.4px] max-w-[945px] font-['Schibsted_Grotesk']">
            Built for the 0.1% who profit before the crowd
          </h2>
          <p className="text-[18px] text-white/80 max-w-3xl mx-auto leading-[28.8px] tracking-[0.18px] font-['Lato']">
          Super intelligent Crypto insights in real time. Know First, Win Fast... KNOW before you FOMO.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>

        <div className="mt-16 text-center overflow-hidden">
          <div className="flex flex-col items-center space-y-6 opacity-100">
            <p className="text-[20px] text-white/80 max-w-3xl leading-[26px] tracking-[0.18px] mb-[1px] font-['Lato'] font-weight-700">
            Seamless Integration of Trusted Partnerships - Centralised For Your Convenience.
            </p>

            {/* Enhanced logos row with larger responsive sizes */}
            <div className="w-full flex justify-center items-center py-8 sm:py-10 md:py-12 lg:py-14 relative">
              {/* Mobile: Stack in 2 rows */}
              <div className="grid grid-cols-2 gap-6 sm:hidden w-full max-w-sm">
                {[Lunar, CoinGecko, Reddit, OpenAI, Dextool].map((logo, index) => (
                  <div
                    key={index}
                    className={`w-[100px] h-[60px] flex items-center justify-center mx-auto ${index === 4 ? 'col-span-2 justify-self-center' : ''}`}
                  >
                    <img
                      src={logo}
                      alt={`tech-logo-${index}`}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 max-w-full max-h-full"
                    />
                  </div>
                ))}
              </div>

              {/* Tablet: Single row with moderate spacing */}
              <div className="hidden sm:flex lg:hidden justify-center items-center gap-8 w-full">
                {[Lunar, CoinGecko, Reddit, OpenAI, Dextool].map((logo, index) => (
                  <div key={index} className="w-[120px] h-[70px] flex-shrink-0 flex items-center justify-center">
                    <img
                      src={logo}
                      alt={`tech-logo-${index}`}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 max-w-full max-h-full"
                    />
                  </div>
                ))}
              </div>

              {/* Desktop: Single row with generous spacing */}
              <div className="hidden lg:flex justify-center items-center gap-12 xl:gap-16 w-full">
                {[Lunar, CoinGecko, Reddit, OpenAI, Dextool].map((logo, index) => (
                  <div key={index} className="w-[140px] h-[80px] xl:w-[160px] xl:h-[90px] flex-shrink-0 flex items-center justify-center">
                    <img
                      src={logo}
                      alt={`tech-logo-${index}`}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 max-w-full max-h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;