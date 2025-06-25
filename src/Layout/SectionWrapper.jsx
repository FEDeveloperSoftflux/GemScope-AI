import React from 'react';

const SectionWrapper = ({ 
  children, 
  id = '',
  className = '',
  background = 'default',
  padding = 'default',
  maxWidth = '7xl',
  ...props 
}) => {
  const backgroundClasses = {
    default: 'bg-black',
    gradient: 'bg-gradient-to-b from-black to-gray-900',
    'gradient-reverse': 'bg-gradient-to-b from-gray-900 to-black',
    'gradient-purple': 'bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20',
    transparent: 'bg-transparent'
  };

  const paddingClasses = {
    none: '',
    sm: 'py-12',
    default: 'py-20',
    lg: 'py-24',
    xl: 'py-32'
  };

  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full'
  };

  return (
    <section 
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;