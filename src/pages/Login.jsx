import { useState } from 'react';
import Background from '../assets/Login.png';
import Logo from '../assets/Logo.svg';
import Button from '../Components/Common/Button';
import GoogleIcon from '../assets/Google.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    if (!formData.email || !formData.password) return;

    setIsLoading(true);
    setTimeout(() => {
      console.log('Login attempt:', formData);
      navigate('/dashboard');
      setIsLoading(false);
    }, 2000);
  };

  const handleGoogleLogin = () => {};

  const handleForgotPassword = () => {
    alert('Forgot password functionality would be implemented here!');
  };

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row bg-black  p-3 sm:p-5 rounded-3xl lg:rounded-4xl">
      {/* Left Panel */}
      <div
      className="hidden lg:flex w-full lg:flex-1 relative flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 pl-2 sm:pl-4 md:pl-8 lg:pl-10 rounded-3xl lg:rounded-4xl h-[40vh] lg:h-auto mb-4 lg:mb-0"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',  
        backgroundRepeat: 'no-repeat',
      }}>

        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-white text-xl sm:text-2xl font-medium px-3 py-1 rounded-lg shadow-md z-20 font-['Schibsted Grotesk'] ">
          A WISE QUOTE
        </div>
        <div className="absolute inset-0 "></div>
        <div className="relative flex-1 flex flex-col justify-end items-start">
          <h1 className="font-['Schibsted Grotesk'] font-medium text-[28px] sm:text-[42px] md:text-[52px] lg:text-[65px] leading-[34px] sm:leading-[48px] md:leading-[58px] lg:leading-[70px] tracking-[-0.03em] text-white mb-0" style={{ maxWidth: '749px' }}>
            The Wealth Revolution Has Begun
          </h1>
          <p className="text-white text-sm sm:text-base font-medium mt-4 font-['Lato'] text-left">
            Crypto isn't just the future of Money, it's the rebellion <br />
            against a broken system - It's Wall Street for the people.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:flex-1 bg-black flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-6 rounded-3xl lg:rounded-4xl relative">
        {/* Logo + Welcome Section */}
        <div className="w-full max-w-2xl mx-auto px-2 sm:px-6">
          <div className="flex flex-col items-center sm:flex-row sm:items-center mb-20 sm:mb-10">
            <img src={Logo} alt="GemScope AI Logo" className="w-10 h-10 object-contain mb-2 sm:mb-0" />
            <span className="text-white text-[22px] font-weight-400 leading-[18px] tracking-[-0.28px] sm:ml-3">GemScope AI</span>
          </div>
          <div className="mb-4 sm:mb-6 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-2 font-['Schibsted Grotesk'] font-weight-500 leading-[48px] tracking-[0.4px] font-semibold">Welcome Back!</h2>
            <p className="text-white/80 text-[14px] font-['Lato'] mt-4">Please Enter Login Details Below</p>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-2xl space-y-4 sm:space-y-6 mx-auto text-center sm:text-left px-4 sm:px-6 pb-6">
          <div className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-5 py-3 bg-white/5 rounded-xl text-white font-['Schibsted Grotesk'] placeholder-white/40 text-base outline-none transition-all duration-300 border ${
                  focusedField === 'email'
                    ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10'
                    : 'hover:bg-white/8 border-transparent'
                }`}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-5 py-3 bg-white/5 rounded-xl text-white placeholder-white/40 text-base outline-none transition-all duration-300 border ${
                  focusedField === 'password'
                    ? 'border-white bg-white/8 shadow-lg shadow-purple-500/10'
                    : 'hover:bg-white/8 border-transparent'
                }`}
                required
              />
            </div>

            <div className="text-center sm:text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-white text-sm underline hover:text-purple-400 transition duration-300 font-['Schibsted Grotesk']"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className={`relative w-full py-3 text-sm sm:text-base font-medium text-black bg-gradient-to-r from-purple-400 via-white to-pink-300 rounded-xl shadow-black/60 drop-shadow-lg transition-all duration-300 ease-in-out active:scale-95 font-['Schibsted Grotesk'] shadow-[inset_-4px_0_8px_rgba(0,0,0,0.3),inset_4px_0_8px_rgba(0,0,0,0.3)] ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2 font-semibold text-black">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Logging in...
                </div>
              ) : (
                <span className="font-['Schibsted Grotesk']">Login</span>
              )}
            </button>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 bg-transparent border border-white text-white font-medium text-sm sm:text-base rounded-xl transition duration-300 hover:bg-white/5 hover:border-white/30 flex items-center justify-center gap-3"
          >
            <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
            <span className="font-bold font-['Schibsted Grotesk']">Log in with Google</span>
          </button>
        </div>

        {/* Create Account */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center text-white/60 text-sm text-center">
          <span>Don't have an account?</span>
          <button
            onClick={handleCreateAccount}
            className="text-white font-semibold ml-2 hover:text-purple-400 transition duration-300"
          >
            <span className="font-bold font-['Schibsted Grotesk']">Create Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
