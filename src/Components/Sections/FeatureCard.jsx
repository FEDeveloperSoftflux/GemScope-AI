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
        <h3 className="text-[20px] font-medium text-white/80 mb-3 font-['Lato'] leading-[26px] tracking-[-0.4px] font-weight-700 text-center ml-15 mr-15">
          {title}
        </h3>
      )}

    </Card>
  );
};

export default FeatureCard;