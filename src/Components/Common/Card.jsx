import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  gradient = false,
  hover = true,
  padding = 'md',
  ...props 
}) => {
  const baseClasses = 'backdrop-blur-sm border border-white/10 rounded-xl';
  const backgroundClasses = gradient 
    ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50' 
    : 'bg-gray-900/50';
  const hoverClasses = hover ? 'hover:scale-105 transition-transform duration-300' : '';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    none: ''
  };
  
  return (
    <div 
      className={`${baseClasses} ${backgroundClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;