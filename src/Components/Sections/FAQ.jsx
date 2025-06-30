import React from 'react';
import FaqItem from './FaqItem';

const FAQ = ({ faqData = [], openFaqIndex, onFaqToggle }) => {
  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-2 text-white  text-center mx-auto font-['Schibsted_Grotesk'] 
          text-[28px] tracking-tight sm:text-[36px] sm:leading-[44px] sm:tracking-tight md:text-[44px] md:leading-[54px] md:tracking-tight 
          lg:text-[60px] lg:leading-[72px] lg:tracking-[-2.4px] max-w-[945px] font-weight-500">
            FAQ
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === index}
              onToggle={() => onFaqToggle(index)}
              className="transition-all duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;