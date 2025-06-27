import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import Card from '../Common/Card';

const FaqItem = ({ 
  question, 
  answer, 
  isOpen: controlledIsOpen,
  onToggle,
  className = '',
  ...props 
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 hover:border-purple-500/30 ${className}`} 
      onClick={handleToggle}
      hover={false}
      {...props}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] text-white pr-4  text-left font-['Lato'] font-weight-700 leading-[26px] tracking-[-0.4px]">
          {question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 text-white/20 transition-transform duration-200" />
          ) : (
            <Plus className="w-5 h-5 text-white/20 transition-transform duration-200" />
          )}
        </div>
      </div>
      
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-white/10 animate-in slide-in-from-top duration-200">
          <div className="text-[15px] text-white/80 max-w-3xl leading-[26px] tracking-[0.px] mb-[40px] font-['Lato'] font-weight-700">
            {typeof answer === 'string' ? (
              <p>{answer}</p>
            ) : (
              answer
            )}
          </div>
        </div>
      )}
    </Card>
  );
};

export default FaqItem;