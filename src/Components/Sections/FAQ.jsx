import React from 'react';
import FaqItem from './FaqItem';

const FAQ = ({ faqData = [], openFaqIndex, onFaqToggle }) => {
  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white font-medium text-center mx-auto font-['Schibsted_Grotesk'] text-[30px] sm:text-[37px] sm:leading-[45px] md:text-[60px] md:leading-[72px] lg:text-[60px] lg:leading-[70.4px] lg:tracking-normal max-w-[945px] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-[18px] text-gray-300 max-w-3xl mx-auto font-['Lato'] leading-[28.8px] tracking-[0.18px]">
            Get answers to the most common questions about GemScope AI and our cryptocurrency analysis platform.
          </p>
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