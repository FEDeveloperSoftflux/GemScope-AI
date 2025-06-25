import { useState } from 'react';
import Background from '../../assets/Background.png';
import Logo from '../../assets/Logo.png';
import Button from '../Common/Button';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    business: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add validation as needed
    setIsLoading(true);
    setTimeout(() => {
      console.log('Create Account attempt:', formData);
      setIsLoading(false);
      navigate('/verification');
    }, 2000);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
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
        {/* Top Left Quote */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-white text-xl sm:text-2xl font-semibold bg-black/30 px-3 py-1 rounded-lg shadow-md z-20 font-['Schibsted Grotesk'] ">
          A Wise Quote
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-end">
          <h1
            className="text-left font-medium font-schibsted text-[32px] sm:text-[48px] md:text-[60px] lg:text-[75px] leading-[38px] sm:leading-[54px] md:leading-[66px] lg:leading-[82px] tracking-[-0.03em] text-white mb-0"
            style={{ maxWidth: '749px', height: 'auto' }}
          >
            The Crypto Gold Rush Is Now
          </h1>
          <p className="text-left text-white text- sm:text-[20px] font-normal mt-10 font-['Lato']">Crypto isn't just the future of Money, it's the rebellion <br /> against a broken system - It's Wall Street for the people.</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:flex-1 bg-gray-950 flex flex-col justify-center items-center p-4 sm:p-10 md:p-14 lg:p-10 rounded-3xl lg:rounded-4xl relative">
        {/* Logo + Welcome Section Wrapper */}
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center mb-6 sm:mb-12">
            <img src={Logo} alt="GemScope AI Logo" className="w-10 h-10 object-contain mb-2 sm:mb-0" />
            <span className="text-white text-lg font-semibold sm:ml-3">GemScope AI</span>
          </div>
          {/* Welcome Section */}
          <div className="mb-6 sm:mb-12 text-center sm:text-left">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white mb-2 sm:mb-3 font-['Schibsted Grotesk']">Welcome Back!</h2>
            <p className="text-white/60 text-xs sm:text-base font-['Schibsted Grotesk'] mt-3">Please Enter Details Below</p>
          </div>
        </div>
        {/* Create Account Form */}
        <div className="w-full max-w-3xl space-y-6 sm:space-y-8 mx-auto pb-16 px-4 sm:px-8">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => setFocusedField(null)}
                className={`flex-1 min-w-0 px-5 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 text-base transition-all duration-300 outline-none ${
                  focusedField === 'firstName' ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10' : 'hover:bg-white/8'
                } text-left border ${focusedField === 'firstName' ? 'border-white' : 'border-transparent'}`}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => setFocusedField(null)}
                className={`flex-1 min-w-0 px-5 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 text-base transition-all duration-300 outline-none ${
                  focusedField === 'lastName' ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10' : 'hover:bg-white/8'
                } text-left border ${focusedField === 'lastName' ? 'border-white' : 'border-transparent'}`}
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`flex-1 min-w-0 px-5 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 text-base transition-all duration-300 outline-none ${
                  focusedField === 'email' ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10' : 'hover:bg-white/8'
                } text-left border ${focusedField === 'email' ? 'border-white' : 'border-transparent'}`}
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact number"
                value={formData.contact}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('contact')}
                onBlur={() => setFocusedField(null)}
                className={`flex-1 min-w-0 px-5 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 text-base transition-all duration-300 outline-none ${
                  focusedField === 'contact' ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10' : 'hover:bg-white/8'
                } text-left border ${focusedField === 'contact' ? 'border-white' : 'border-transparent'}`}
                required
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="business"
                placeholder="Business Name (Optional)"
                value={formData.business}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('business')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-5 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 text-base transition-all duration-300 outline-none ${
                  focusedField === 'business' ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10' : 'hover:bg-white/8'
                } text-left border ${focusedField === 'business' ? 'border-white' : 'border-transparent'}`}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                className={`flex-1 min-w-0 px-5 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 text-base transition-all duration-300 outline-none ${
                  focusedField === 'password' ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10' : 'hover:bg-white/8'
                } text-left border ${focusedField === 'password' ? 'border-white' : 'border-transparent'}`}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('confirmPassword')}
                onBlur={() => setFocusedField(null)}
                className={`flex-1 min-w-0 px-5 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 text-base transition-all duration-300 outline-none ${
                  focusedField === 'confirmPassword' ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10' : 'hover:bg-white/8'
                } text-left border ${focusedField === 'confirmPassword' ? 'border-white' : 'border-transparent'}`}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              variant="primary"
              className="w-full py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 font-semibold text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2 font-semibold">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Creating Account...
                </div>
              ) : (
                <span className="font-bold font-['Schibsted Grotesk']">Create Account</span>
              )}
            </Button>
          </form>
        </div>
        {/* Create Account absolutely at the bottom center */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center text-white/60 text-xs sm:text-sm text-center">
          <span>Already have an account?</span>
          <button
            onClick={handleLogin}
            className="text-white font-semibold ml-2 hover:text-purple-400 transition-colors duration-300"
          >
            <span className="font-bold font-['Schibsted Grotesk']">Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;