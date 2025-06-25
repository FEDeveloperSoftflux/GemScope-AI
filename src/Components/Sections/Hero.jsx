import React from 'react';
import Button from '../Common/Button';
import backgroundImage from '../../assets/Background.png';
import dashboardImage from '../../assets/DashboardImage.png';

const HeroContent = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center rounded-2xl "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[80px] sm:mt-[100px] flex-1 flex flex-col">
        <h2 className="mb-6 text-white font-medium text-center mx-auto font-['Schibsted_Grotesk' mt-[10px]
          text-[28px] tracking-tight sm:text-[36px] sm:leading-[44px] sm:tracking-tight md:text-[44px] md:leading-[54px] md:tracking-tight lg:text-[54px] lg:leading-[64px] lg:tracking-tight max-w-[945px]">
          AI Engine To Analyse Coins &<br/>
          Uncover The Next 100x
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Harness the power of advanced AI to identify hidden gems before they explode.
          Our proprietary algorithms analyze thousands of data points to give you the edge in crypto trading.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg">Start Free Trial</Button>
        </div>
      </div>

      {/* Dashboard Image - always at the bottom on mobile, in flow on larger screens */}
      <div className="w-full flex justify-center mt-auto absolute bottom-0 left-0 right-0 px-4 pb-4 sm:static sm:mt-0 sm:pb-0">
        <img
          src={dashboardImage}
          alt="Dashboard Preview"
          className="rounded-1xl shadow-xl max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-5xl h-auto"
        />
      </div>
    </section>
    
  );
};

export default HeroContent;
