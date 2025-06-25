import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Card from './Card';

const AccordionItem = ({ 
  title, 
  children, 
  isOpen, 
  onToggle,
  className = '' 
}) => {
  return (
    <Card 
      className={`cursor-pointer ${className}`} 
      onClick={onToggle}
      hover={false}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white pr-4">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
        )}
      </div>
      
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-gray-300">
            {children}
          </div>
        </div>
      )}
    </Card>
  );
};

const Accordion = ({ 
  items = [], 
  allowMultiple = false,
  className = '' 
}) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    
    if (allowMultiple) {
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        newOpenItems.add(index);
      }
    } else {
      if (newOpenItems.has(index)) {
        newOpenItems.clear();
      } else {
        newOpenItems.clear();
        newOpenItems.add(index);
      }
    }
    
    setOpenItems(newOpenItems);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export { Accordion, AccordionItem };
export default Accordion;