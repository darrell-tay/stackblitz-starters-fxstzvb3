'use client';

import PricingCard from './PricingCard';
import { pricingPlans } from '../../data/pricing';

export default function PricingSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {pricingPlans.map((plan) => (
        <PricingCard
          key={plan.id}
          {...plan}
        />
      ))}
    </div>
  );
}