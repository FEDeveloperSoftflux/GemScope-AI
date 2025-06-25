import React from 'react';
import PricingCard from '../Sections/PricingCard';

const Pricing = ({ pricingPlans = [], onPlanSelection }) => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-white font-medium text-center mx-auto font-['Schibsted_Grotesk'] text-[36px] sm:text-[48px] sm:leading-[58px] md:text-[60px] md:leading-[72px] lg:text-[72px] lg:leading-[86.4px] max-w-[945px]">
            Pricing Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your trading journey. All plans include our core AI analysis engine.
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;