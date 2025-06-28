import React from 'react';
import Card from '../Common/Card';
import ContainerImage from '../../assets/Container.png';
import OverlayImage from '../../assets/Overlay.png';
import Image1 from '../../assets/Image1.png';
import Image2 from '../../assets/Image11.png';
import CardanoLogo from '../../assets/CARDANO.svg';
import BitcoinLogo from '../../assets/Bitcoin.svg';
import XrpLogo from '../../assets/XRP.svg';
import SolanaLogo from '../../assets/Solane.svg';
import TetherLogo from '../../assets/Tether.svg';
import BinanceLogo from '../../assets/Binance.svg';
import EthereumLogo from '../../assets/Ethreum.svg';

const cryptoLogos = [
  CardanoLogo, BitcoinLogo, XrpLogo, SolanaLogo, TetherLogo,
  BinanceLogo, EthereumLogo, CardanoLogo, BitcoinLogo, XrpLogo
];

const AnimatedLogosRow = ({ logos, direction = 'left' }) => {
  // Duplicate logos for seamless animation
  const allLogos = [...logos, ...logos];
  return (
    <div className="w-full overflow-hidden flex justify-center items-center relative mb-10">
      {/* Left gradient overlay - responsive width */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-15 z-10 " style={{background: 'linear-gradient(to right, #000 40%, transparent 100%)'}} />
      {/* Right gradient overlay - responsive width */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-20 z-10 mb-10" style={{background: 'linear-gradient(to left, #000 40%, transparent 100%)'}} />
      <div className={`flex space-x-12 w-max justify-center items-center ${direction === 'right' ? 'animate-logo-slide-reverse' : 'animate-logo-slide'}`}
        style={{ animationDuration: '15s' }}>
        {allLogos.map((logo, idx) => (
          <div
            key={idx}
            className="w-[120px] h-[56px] flex-shrink-0 flex items-center justify-center bg-[#ffffff]/11 rounded-xl  p-2"
          >
            <img
              src={logo}
              alt={`crypto-logo-${idx}`}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 w-full h-full"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes logo-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes logo-slide-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-logo-slide {
          animation: logo-slide 10s linear infinite;
        }
        .animate-logo-slide-reverse {
          animation: logo-slide-reverse 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

const LifeChanging = () => {

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
      <h2 className="mb-6 text-white font-medium text-center mx-auto font-['Schibsted_Grotesk'] 
          text-[28px] tracking-tight sm:text-[36px] sm:leading-[44px] sm:tracking-tight md:text-[44px] md:leading-[54px] md:tracking-tight 
          lg:text-[60px] lg:leading-[72px] lg:tracking-[-2.4px] max-w-[945px] font-weight-500">
            One Prompt Away from Life
            <br />
            Changing Gains
          </h2>
          <p className="text-[20px] text-white/80 max-w-3xl mx-auto leading-[32px]  font-['Lato']">    
            Skip hours of research, risk, and doubt with curated AI guided crypto analysis – <br/>
            from dissecting your favourite coins to trading hidden gems.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side: main card and two below */}
          <div className="flex-1 max-w-full lg:max-w-3xl mx-auto lg:mx-0">
            <div className="bg-gray/60 border border-white/10 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full relative overflow-hidden min-h-[250px] sm:min-h-[300px] lg:min-h-[250px] ">
              {/* Logos Row - Animated */}
              <AnimatedLogosRow logos={cryptoLogos} direction="left" />
              <AnimatedLogosRow logos={cryptoLogos} direction="right" />
              {/* Heading and Text */}
              <h3 className="text-white text-[20px]  font-weight-700 mb-2 leading-[26px] tracking-[-0.4px] font-['Lato']">GemScope. Built For Every Crypto Investors Dream.</h3>
              <p className="text-white/60 text-[16px] mb-2 font-['Lato'] font-weight-400">
              From true tokenomic insight and detection scans to AI powered analysis - GemScope guides you <br/> through it all, in one place.
              </p>
            </div>
            {/* Two more containers below, stacked vertically on small screens, side by side on larger screens */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <div className="bg-black/80 border border-white/10 rounded-2xl shadow-lg w-full sm:w-1/2 relative overflow-hidden min-h-[300px]">
                <img src={ContainerImage} alt="Dashboard" className="w-full h-full " />
              </div>
          
              <div className="bg-black/80 border border-white/10 rounded-2xl shadow-lg w-full sm:w-1/2 relative overflow-hidden min-h-[300px]">
                <img src={OverlayImage} alt="Dashboard" className="w-full h-full " />
              </div>
              
            </div>
          </div>
                    {/* Right side: green box */}
                    <div
            className="w-full md:w-[340px] min-h-[640px] rounded-2xl flex-shrink-0 mt-8 md:mt-0 bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${Image1})` }}
          >
            <p className="text-white  p-2  ml-5 mt-5 font-['Lato'] font-weight-700 text-[20px] leading-[26px] tracking-[-0.4px]">
              Complete Market Research, Mapped Out For You
            </p>
            <p className="text-white/60  p-2 ml-5 e font-['Lato'] font-weight-400 text-[16px] leading-[20px]">
              GemScope tracks every live endpoint to ensure real time analysis - so the guidance you follow and the decisions you make are always aligned with the latest market updates.
            </p>
            <img 
              src={Image2} 
              alt="Lower Right" 
              className="absolute right-0 bottom-0 w-1/2 min-w-[60px] max-w-xs  sm:w-[92%] sm:h-[70%]  md:w-[92%] md:h-[70%]  lg:w-[92%] lg:h-[70%]" 
              style={{ minWidth: '60px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default LifeChanging;