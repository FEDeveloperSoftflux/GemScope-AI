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

const cryptoLogos1 = [CardanoLogo, BitcoinLogo, XrpLogo, SolanaLogo];
const cryptoLogos2 = [TetherLogo, BinanceLogo, EthereumLogo];

const LifeChanging = () => {

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
      <h2 className="mb-2 text-white  text-center mx-auto font-['Schibsted_Grotesk'] 
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
            <div className="bg-zinc-950  border border-white/10 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full relative overflow-hidden min-h-[250px] sm:min-h-[300px] lg:min-h-[250px] ">
              {/* Logos Row - Static */}
              <div className="flex flex-col items-center gap-4 mb-8">
                <div className="flex flex-wrap justify-center items-center gap-10">
                  {cryptoLogos1.map((logo, idx) => (
                    <div key={idx} className="w-[120px] h-[56px] flex-shrink-0 flex items-center justify-center bg-[#ffffff]/11 rounded-xl p-2">
                      <img src={logo} alt={`crypto-logo-1-${idx}`} className="object-contain opacity-80 w-full h-full" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center items-center gap-10">
                  {cryptoLogos2.map((logo, idx) => (
                    <div key={idx} className="w-[120px] h-[56px] flex-shrink-0 flex items-center justify-center bg-[#ffffff]/11 rounded-xl p-2">
                      <img src={logo} alt={`crypto-logo-2-${idx}`} className="object-contain opacity-80 w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Heading and Text */}
              <h3 className="text-white text-[20px]  font-weight-700 mb-2 leading-[26px] tracking-[-0.4px] font-['Lato']">GemScope. Built For Every Crypto Investors Dream.</h3>
              <p className="text-white/60 text-[16px] mb-2 font-['Lato'] font-weight-400">
              From true tokenomic insight and detection scans to AI powered analysis - GemScope guides you <br/> through it all, in one place.
              </p>
            </div>
            {/* Two more containers below, stacked vertically on small screens, side by side on larger screens */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <div className="bg-black/80 rounded-2xl shadow-lg w-full sm:w-1/2 relative overflow-hidden min-h-[300px]">
                <img src={ContainerImage} alt="image" className="w-full h-full " />
              </div>
          
              <div className="bg-zinc-950 border border-white/10 rounded-2xl  w-full sm:w-1/2 relative overflow-hidden min-h-[300px] p-6">
              <h3 className="text-white text-[20px] font-bold mb-4 leading-[26px] tracking-[-0.4px] font-['Lato']">
                What you don't know can cost<br />you thousands of $
                </h3>
              <p className="text-white/70 font-['Lato'] text-[16px] leading-[20px] mr-10">
                One wrong move could waste your time. More importantly, your portfolio could be completely wiped out. GemScope helps you avoid rug pulls and keeps you from HODL'ing unworthy coins.
                </p>
                <img src={OverlayImage} alt="image" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-75 h-65 mb-2 align-middle"/>
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
              className="absolute right-0 bottom-0 w-1/2 min-w-[60px] max-w-xs  sm:w-[90%] sm:h-[70%]  md:w-[90%] md:h-[70%]  lg:w-[90%] lg:h-[70%]" 
              style={{ minWidth: '60px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default LifeChanging;