import { useState } from 'react';
import Background from '../../assets/Background.png';
import Logo from '../../assets/Logo.svg';
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
    <div className="h-screen flex flex-col lg:flex-row bg-black overflow-hidden p-3 sm:p-5">
      {/* Left Panel */}
      <div
        className="w-full lg:flex-1 relative flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 pl-2 sm:pl-4 md:pl-8 lg:pl-10 rounded-3xl lg:rounded-4xl h-[40vh] lg:h-auto mb-4 lg:mb-0"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000',
        }}
      >
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-white text-xl sm:text-2xl font-semibold  px-3 py-1 rounded-lg shadow-md z-20 font-['Schibsted Grotesk']">
          A WISE QUOTE
        </div>
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 flex-1 flex flex-col justify-end">
          <h1 className="text-left font-weight-500 font-medium font-['Schibsted Grotesk'] text-[28px] sm:text-[42px] md:text-[52px] lg:text-[65px] leading-[34px] sm:leading-[48px] md:leading-[58px] lg:leading-[70px] tracking-[-0.03em] text-white mb-0" style={{ maxWidth: '749px' }}>
            The Crypto Gold Rush Is Now
          </h1>
          <p className="text-left text-white text-sm sm:text-base font-weight-500 mt-4 font-['Lato']">
          This is the greatest wealth transfer in human history. You're<br/>either in early... or you'll wish you were.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:flex-1 bg-black flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-6 rounded-3xl lg:rounded-4xl relative">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center sm:flex-row sm:items-center mb-4 sm:mb-10">
            <img src={Logo} alt="GemScope AI Logo" className="w-10 h-10 object-contain mb-2 sm:mb-0" />
            <span className="text-white text-[22px] font-weight-400 leading-[18px] tracking-[-0.28px] sm:ml-3">GemScope AI</span>
          </div>
          <div className="mb-4 sm:mb-6 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-2 font-['Schibsted Grotesk'] font-weight-500 leading-[48px] tracking-[0.4px] font-semibold">Welcome Back!</h2>
            <p className="text-white/80 text-sm sm:text-base font-['Lato']">Please Enter Your Details</p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full max-w-3xl space-y-4 sm:space-y-6 mx-auto px-4 sm:px-6 pb-4">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              {['firstName', 'lastName'].map(field => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={field === 'firstName' ? 'First Name' : 'Last Name'}
                  value={formData[field]}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField(field)}
                  onBlur={() => setFocusedField(null)}
                  className={`flex-1 px-5 py-3 bg-white/5 rounded-xl text-white placeholder-white/40 text-base outline-none transition duration-300 border ${
                    focusedField === field ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10' : 'hover:bg-white/8 border-transparent'
                  }`}
                  required
                />
              ))}
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
                className={`flex-1 px-5 py-3 bg-white/5 rounded-xl text-white placeholder-white/40 text-base outline-none transition duration-300 border ${
                  focusedField === 'email' ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10' : 'hover:bg-white/8 border-transparent'
                }`}
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
                className={`flex-1 px-5 py-3 bg-white/5 rounded-xl text-white placeholder-white/40 text-base outline-none transition duration-300 border ${
                  focusedField === 'contact' ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10' : 'hover:bg-white/8 border-transparent'
                }`}
                required
              />
            </div>

            <input
              type="text"
              name="business"
              placeholder="Business Name (Optional)"
              value={formData.business}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('business')}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-5 py-3 bg-white/5 rounded-xl text-white placeholder-white/40 text-base outline-none transition duration-300 border ${
                focusedField === 'business' ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10' : 'hover:bg-white/8 border-transparent'
              }`}
            />

            <div className="flex flex-col sm:flex-row gap-4">
              {['password', 'confirmPassword'].map(field => (
                <input
                  key={field}
                  type="password"
                  name={field}
                  placeholder={field === 'password' ? 'Password' : 'Re-enter Password'}
                  value={formData[field]}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField(field)}
                  onBlur={() => setFocusedField(null)}
                  className={`flex-1 px-5 py-3 bg-white/5 rounded-xl text-white placeholder-white/40 text-base outline-none transition duration-300 border ${
                    focusedField === field ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10' : 'hover:bg-white/8 border-transparent'
                  }`}
                  required
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className={`relative w-full py-3 text-sm sm:text-base font-medium text-black bg-gradient-to-r from-purple-400 via-white to-pink-300 rounded-xl shadow-black/60 drop-shadow-lg transition-all duration-300 ease-in-out active:scale-95 font-['Schibsted_Grotesk'] shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)] ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2 font-semibold text-black">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Creating Account...
                </div>
              ) : (
                <span className="font-['Schibsted_Grotesk']">Create Account</span>
              )}
            </button>
          </form>
        </div>

        {/* Login Redirect */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center text-white/60 text-sm text-center">
          <span>Already have an account?</span>
          <button
            onClick={handleLogin}
            className="text-white font-semibold ml-2 hover:text-purple-400 transition duration-300"
          >
            <span className="font-bold font-['Schibsted Grotesk']">Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
