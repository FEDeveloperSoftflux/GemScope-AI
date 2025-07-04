import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Common/Button';
import backgroundImage from '../../assets/Hero.png';
import dashboardImage from '../../assets/DashboardImage.png';

const headlineFull = 'AI Engine To Analyse Coins & Uncover The Next 100x';

const HeroContent = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setHeadlineVisible(true), 100);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowDashboard(true);
        } else {
          setShowDashboard(false);
        }
      },
      { threshold: 0.2 }
    );
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center rounded-4xl mr-5 ml-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* Content */}
      <div className={`relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center mt-[60px] sm:mt-[100px] flex-1 flex flex-col transition-all duration-1000 ease-out
        opacity-100 translate-y-0 blur-0 filter`}>
        <h2
          className={`font-[Schibsted_Grotesk] mb-4 text-white font-normal text-center mx-auto font-schibsted mt-[60px] sm:mt-[100px]
            text-[22px] xs:text-[24px] sm:text-[28px] md:text-[36px] lg:text-[54px] leading-[1.2] sm:leading-[44px] md:leading-[54px] lg:leading-[64px] tracking-tight max-w-[95vw] sm:max-w-[700px] md:max-w-[945px]
            transition-all duration-1000 ease-out
            ${headlineVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
          `}
        >
          {(() => {
            const [before, after] = headlineFull.split(' & ');
            return <>
              {/* On large screens and up, show a <br /> after &; on small screens, keep it inline */}
              <span className="hidden lg:inline">{before} &<br />{after}</span>
              <span className="inline lg:hidden">{before} & {after}</span>
            </>;
          })()}
        </h2>

        <p className="text-[14px] xs:text-[15px] sm:text-lg md:text-[15px] text-white/80 mb-6 sm:mb-8 max-w-[95vw] sm:max-w-3xl mx-auto leading-[1.7] tracking-[0.18px] text-center px-1 xs:px-2" style={{ fontFamily: 'Lato', fontWeight: '500'  }}>  
          Stop guessing and start investing smarter. GemScope AI uses real time data and advanced AI to scan, score, and break down the fundamentals of any crypto project — from fresh launches to overlooked gems. Whether you're hunting for your next 100x or just need clarity on a token, we've got you covered in seconds.
        </p>

        <div className="flex flex-col items-center sm:flex-row gap-4 justify-center mb-8 sm:mb-12 w-full">
          <Link to="/create-account" className="w-full sm:w-auto flex justify-center">
            <button className="relative w-[160px] xs:w-[180px] sm:w-auto px-4 py-2 sm:px-7 sm:py-3 text-[14px] sm:text-[16px] font-medium text-black bg-gradient-to-r from-purple-400 via-white to-pink-300 rounded-xl shadow-black/40 drop-shadow-lg transform transition-all duration-300 ease-in-out active:scale-95 font-['Schibsted_Grotesk'] shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)] flex justify-center items-center">
              Register Now
            </button>
          </Link>
        </div>
      </div>

      {/* Dashboard Image - always in flow and responsive */}
      <div className="w-full flex justify-center mt-auto px-4 pb-4 sm:mt-0 sm:pb-0" ref={imageRef}>
        <div className="border-t-7 border-l-7 border-r-7 border-transparent  rounded-tl-3xl rounded-tr-2xl shadow-xl max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-5xl h-auto bg-black/30">
          <img
            src={dashboardImage}
            alt="Dashboard Preview"
            className={`rounded-tl-2xl rounded-tr-2xl max-w-full h-auto transition-all duration-2000 ease-out
              ${showDashboard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
