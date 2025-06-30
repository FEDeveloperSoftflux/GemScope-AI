import React, { useState } from 'react';
import Background from '../../assets/Footer2.png';

const CTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="py-20 relative overflow-hidden mr-5 ml-5 rounded-t-4xl rounded-b-4xl h-[690.78px] border-t-1 border-white/20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-50 text-center mt-15">
        <h2 className="b-6 text-white font-medium text-center mx-auto font-['Schibsted_Grotesk'] 
            text-[28px] tracking-tight sm:text-[36px] sm:leading-[44px] sm:tracking-tight md:text-[44px] md:leading-[54px] md:tracking-tight 
            lg:text-[60px] lg:leading-[72px] lg:tracking-[-2.4px] max-w-[945px] font-weight-500">
            Manage The Risk, <br/> Maximise Your Potential
          </h2>
          
          <p className="text-[20px] text-gray-300 mb-8 max-w-2xl mr-20 ml-20 font-['Lato'] font-weight-400 leading-[32px] tracking-[0.18px] mt-10">
          GemScope doesn't just protect your portfolio — it brings you one step closer to life changing gains.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="flex-1 font-['Lato'] font-weight-700 text-[16px] leading-[26px] tracking-[-0.4px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                className="w-full px-6 py-4 rounded-lg bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                style={{
                  width: '319.83px',
                  height: '40px',
                  borderRadius: '8px'
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                background: 'linear-gradient(108.135deg, #6B46C1 0%, #9F7AEA 100%)',
                width: '122.17px',
                height: '40px',
                left: '327.83px',
                borderRadius: '8px'
              }}
              className="text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <span className="font-['Lato'] font-weight-700 font-medium text-[14px] ">Join Waitlist</span>
            </button>
          </form>
      </div>
    </section>
  );
};

export default CTA;