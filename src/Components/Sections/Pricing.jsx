import React from 'react';
import PricingCard from '../Sections/PricingCard';

const Pricing = ({ pricingPlans = [], onPlanSelection }) => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="b-6 text-white font-medium text-center mx-auto font-['Schibsted_Grotesk'] 
          text-[28px] tracking-tight sm:text-[36px] sm:leading-[44px] sm:tracking-tight md:text-[44px] md:leading-[54px] md:tracking-tight 
          lg:text-[60px] lg:leading-[72px] lg:tracking-[-2.4px] max-w-[945px] font-weight-500">
            Pricing Plan
          </h2>
          <p className="text-22px text-white/80 max-w-2xl mx-auto mt-10 font-['Lato] font-weight-400 leading-[32px]">
          The Crypto landscape is shifting. GemScope gives you the clarity to act decisively, stay informed and avoid costly mistakes 
          - without second guessing a thing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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