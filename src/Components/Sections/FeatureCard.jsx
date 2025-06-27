import React from 'react';
import Card from '../Common/Card';

const FeatureCard = ({ 
  icon, 
  title, 
  ...props 
}) => {
  return (
    <Card 
      className={`text-center bg-transparent border-none`}
      {...props}
    >
      {icon && (
        <div className={`mb-4 flex justify-center`}>
          {React.cloneElement(icon, { 
            className: `w-8 h-8 ${icon.props.className || ''}` 
          })}
        </div>
      )}
      
      {title && (
        <h3 className="text-[18px] font-medium text-white/80 mb-3 font-['Lato'] leading-[26px] tracking-[0.18px] font-weight-700 text-center">
          {title}
        </h3>
      )}

    </Card>
  );
};

export default FeatureCard;