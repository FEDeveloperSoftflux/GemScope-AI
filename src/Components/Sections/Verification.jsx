import { useState } from 'react';
import Background from '../../assets/Background.png';
import Logo from '../../assets/Logo.png';
import Button from '../Common/Button';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Verification = () => {
  const [tab, setTab] = useState('phone');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const handleTab = (type) => setTab(type);

  const handleSendCode = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setShowOtpModal(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleOtpChange = (e, idx) => {
    const value = e.target.value.replace(/\D/, '');
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
    // Move to next input if value entered
    if (value && idx < 5) {
      document.getElementById(`otp-input-${idx + 1}`).focus();
    }
    // Move to previous input if deleted
    if (!value && idx > 0) {
      document.getElementById(`otp-input-${idx - 1}`).focus();
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();

    setShowOtpModal(false);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row bg-black overflow-hidden p-5">
        {/* Left Panel */}
        <div
          className="w-full lg:flex-1 relative flex flex-col justify-between p-4 sm:p-6 md:p-10 lg:p-16 pl-2 sm:pl-6 md:pl-10 lg:pl-16 rounded-3xl lg:rounded-4xl mb-6 lg:mb-0 h-72 sm:h-96 lg:h-auto"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#000',
          }}
        >
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-white text-xl sm:text-2xl font-semibold bg-black/30 px-3 py-1 rounded-lg shadow-md z-20 font-['Schibsted Grotesk']">
            A Wise Quote
          </div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex-1 flex flex-col justify-end">
          <h1
            className="text-left font-weight-500 font-['Schibsted Grotesk'] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[75px] leading-[38px] sm:leading-[54px] md:leading-[66px] lg:leading-[82px] tracking-[-0.03em] text-white mb-0"
            style={{ maxWidth: '749px', height: 'auto' }}
          >
            The Wealth Revolution Has Begun
          </h1>
            <p className="text-left text-white/80 sm:text-[20px] font-weight-500 mt-10 font-['Lato']">
              Crypto isn't just the future of Money, it's the rebellion <br /> against a broken system - It's Wall Street for the people.
            </p>
          </div>
        </div>
        {/* Right Panel */}
        <div className="w-full lg:flex-1 bg-gray-950 flex flex-col justify-center items-center p-4 sm:p-10 md:p-14 lg:p-10 rounded-3xl lg:rounded-4xl relative">
          <div className="w-full max-w-2xl mx-auto px-4 sm:px-8">
            {/* Logo Section */}
            <div className="flex flex-col items-center sm:flex-row sm:items-center mb-6 sm:mb-12">
            <img src={Logo} alt="GemScope AI Logo" className="w-10 h-10 object-contain mb-2 sm:mb-0" />
            <span className="text-white text-[25px] font-weight-400 leading-[18px] tracking-[-0.28px] sm:ml-3">GemScope AI</span>
          </div>
            {/* Welcome Section */}
            <div className="mb-6 sm:mb-12 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl  text-white mb-2 sm:mb-3 font-['Schibsted Grotesk'] font-weight-500 leading-[82px] tracking-[0.4px]">Verification!</h2>
            <p className="text-white/80 text-sm sm:text-base font-['Lato'] mt-3">Please complete your verification</p>
          </div>
          </div>

          {/* Verification Form */}
          <form onSubmit={handleSendCode} className="w-full max-w-2xl space-y-8 mx-auto text-center sm:text-left px-4 sm:px-8 pb-16">
            {/* Tab Switcher */}
            <div className="flex gap-4">
  <button
    type="button"
    onClick={() => handleTab('phone')}
    className={`flex-1 py-3 text-sm sm:text-base font-medium text-black rounded-xl shadow-black/60 drop-shadow-lg transition-all duration-300 ease-in-out active:scale-95 font-['Schibsted_Grotesk'] shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)] ${
      tab === 'phone'
        ? 'bg-gradient-to-r from-purple-400 via-white to-pink-300'
        : 'bg-black text-gray-400'
    }`}
  >
    Phone Number
  </button>

  <button
    type="button"
    onClick={() => handleTab('email')}
    className={`flex-1 py-3 text-sm sm:text-base font-medium text-black rounded-xl shadow-black/60 drop-shadow-lg transition-all duration-300 ease-in-out active:scale-95 font-['Schibsted_Grotesk'] shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)] ${
      tab === 'email'
        ? 'bg-gradient-to-r from-purple-400 via-white to-pink-300'
        : 'bg-black text-gray-400'
    }`}
  >
    Email Address
  </button>
</div>


            {/* Input Fields */}
            {tab === 'phone' ? (
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={{
                  width: '100%',
                  height: '56px',
                  borderRadius: '1rem',
                  fontSize: '1rem',
                  backgroundColor: 'black',
                  color: 'white',
                  border: 'none',
                  paddingLeft: '56px',
                }}
                buttonStyle={{
                  border: 'none',
                  background: 'transparent',
                }}
                dropdownStyle={{
                  backgroundColor: 'black',
                  color: 'white',
                }}
                containerClass="rounded-2xl w-full"
                inputClass="text-white"
              />
            ) : (
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black rounded-2xl px-4 py-3 text-white placeholder-gray-500 text-lg outline-none"
                required
              />
            )}

            {/* Send Code Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`relative w-full py-3 text-sm sm:text-base font-medium text-black bg-gradient-to-r from-purple-400 via-white to-pink-300 rounded-xl shadow-black/60 drop-shadow-lg transition-all duration-300 ease-in-out active:scale-95 font-['Schibsted Grotesk'] shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)] ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2 font-semibold text-black">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Sending Code...
                </div>
              ) : (
                <span className="font-['Schibsted Grotesk']">Send Code</span>
              )}
            </button>
          </form>
        </div>
      </div>
      {/* OTP Modal and Blur Overlay - OUTSIDE main flex container */}
      {showOtpModal && (
        <>
          <div className="fixed inset-0 z-40 backdrop-blur-[6px] bg-black/30"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-0">
            <div className="bg-zinc-800 rounded-2xl p-4 sm:p-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-[500px] max-w-[90vw] flex flex-col items-center shadow-2xl">
              <h3 className="text-2xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8 text-center">Enter OTP Code</h3>
              <form onSubmit={handleVerifyCode} className="w-full flex flex-col items-center">
                <div className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`otp-input-${idx}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={e => handleOtpChange(e, idx)}
                      className="w-10 h-12 sm:w-16 sm:h-16 rounded-lg text-lg sm:text-2xl text-center bg-zinc-800 border border-gray-700 text-white focus:border-purple-400 outline-none transition-all duration-200"
                      autoFocus={idx === 0}
                    />
                  ))}
                </div>
                <div className="flex flex-col items-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                  <button type="button" className="text-gray-600 text-sm sm:text-sm hover:text-white transition-colors font-['Schibsted Grotesk']">Resend Code</button>
                  <button type="button" className="text-gray-600 text-sm sm:text-sm hover:text-white transition-colors font-['Schibsted Grotesk']">Call Request</button>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 sm:py-3 rounded-2xl font-semibold text-sm sm:text-lg bg-gradient-to-r from-purple-400 via-white to-pink-400 text-black shadow-md transition-all duration-200"
                >
                  Verify Code
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Verification;
