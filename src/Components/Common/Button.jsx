import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClasses = 'font-extrabold rounded-full transition-all duration-300 inline-flex items-center justify-center text-center border-0 cursor-pointer';
  
  const variants = {
    primary: 'text-black shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm',
    outline: 'border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10'
  };
  
  const sizes = {
    sm: 'px-8 py-4 text-sm min-w-[50px] sm:min-w-[80px] md:min-w-[120px] lg:min-w-[150px]',
    md: 'px-12 py-4 text-lg min-w-[200px]',
    lg: 'px-8 py-4 min-w-[100px]'
  };
  
  const primaryGradient = {
    background: 'linear-gradient(135deg, #b983ff 0%, #e8c5ff 30%, #ffffff 50%, #ffc0e8 70%, #fa71cd 100%)',
  };
  
  return (
      <button 
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        style={variant === 'primary' ? primaryGradient : {}}
        {...props}
      >
        {children}
      </button>
  );
};

export default Button;