import Header from '../components/Header';
import PricingSection from '../components/pricing/PricingSection';
import FeatureComparisonTable from '../components/pricing/FeatureComparisonTable';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
        </div>
        <PricingSection />
        <FeatureComparisonTable />
      </main>
    </div>
  );
}