import React from 'react';
import PricingCard from '../Sections/PricingCard';

const Pricing = ({ pricingPlans = [], onPlanSelection }) => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-[1700px] mx-auto px-8 sm:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="mb-2 text-white  text-center mx-auto font-['Schibsted_Grotesk'] 
          text-[28px] tracking-tight sm:text-[36px] sm:leading-[44px] sm:tracking-tight md:text-[44px] md:leading-[54px] md:tracking-tight 
          lg:text-[60px] lg:leading-[72px] lg:tracking-[-2.4px] max-w-[945px] font-weight-500">
            Pricing Plan
          </h2>
          <p className="text-[18px] text-white/80 mt-8 font-['Lato'] font-weight-400 leading-[32px] max-w-[743px] text-center mx-auto">
          The Crypto landscape is shifting. GemScope gives you the clarity to act decisively, stay informed and avoid costly mistakes 
          - without second guessing a thing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center ml-10 mr-10">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              popular={plan.popular}
              color={plan.color}
              onSelectPlan={onPlanSelection}
              iconBg={plan.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;