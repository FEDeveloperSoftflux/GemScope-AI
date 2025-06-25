import React from 'react';
import FeatureCard from './FeatureCard';
import Lunar from '../../assets/Lunar.png' ;
import Dextool from '../../assets/Dextool.png';
import Reddit from '../../assets/Reddit.png';
import Shield from '../../assets/Shield.svg';
import Network from '../../assets/Network.svg';
import OpenAI from '../../assets/OpenAI.png';


const Features = ({ features = [] }) => {
  return (
    <section id="features" className="py-20  relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="mb-6 text-white font-normal text-center mx-auto font-['Schibsted_Grotesk' mt-[10px]
          text-[28px] tracking-tight sm:text-[36px] sm:leading-[44px] sm:tracking-tight md:text-[44px] md:leading-[54px] md:tracking-tight lg:text-[49px] lg:leading-[64px] lg:tracking-tight max-w-[945px]">
            Built for the 0.1% who profit before the crowd
          </h2>
          <p className="text-[14px] text-gray-300 max-w-3xl mx-auto font-['Lato'] leading-[28.8px] tracking-[0.18px]">
          Super intelligent Crypto insights in real time. Know First, Win Fast... KNOW before you FOMO.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    <p className="text-[14px] text-gray-300 max-w-3xl font-['Lato'] leading-[28.8px] tracking-[0.18px] mb-[40px] ">
    Seamless Integration of Trusted Partnerships - Centralised For Your Convenience.
    </p>

    {/* Sliding logos */}
    <div className="w-full overflow-hidden flex justify-center items-center relative">
      {/* Left gradient overlay - wider and smoother fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 z-10" style={{background: 'linear-gradient(to right, #000 80%, transparent 100%)'}} />
      {/* Right gradient overlay - wider and smoother fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 z-10" style={{background: 'linear-gradient(to left, #000 80%, transparent 100%)'}} />
      <div className="flex animate-logo-slide space-x-12 w-max justify-center items-center">
        {[
          Lunar, Dextool, Reddit,OpenAI,
          Lunar, Dextool, Reddit,OpenAI// duplicate for infinite effect
        ].map((logo, index) => (
          <div key={index} className="w-[248px] h-[64px] md:w-[248px] md:h-[64px] lg:w-[248px] lg:h-[64px] flex-shrink-0 flex items-center justify-center">
            <img
              src={logo}
              alt={`tech-logo-${index}`}
              className={`object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 w-full h-full ${index % 5 > 2 ? 'mask-logo' : ''}`}
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes logo-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-slide {
          animation: logo-slide 20s linear infinite;
        }
        .mask-logo {
          -webkit-mask-image: radial-gradient(circle at 50% 50%, white 70%, transparent 100%);
          mask-image: radial-gradient(circle at 50% 50%, white 70%, transparent 100%);
        }
      `}</style>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Features;