import { features } from '../../data/pricing';

export default function FeatureComparisonTable() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-t border-gray-200">
              <th className="py-4 px-6 text-left text-gray-500 font-medium">Feature</th>
              <th className="py-4 px-6 text-center text-gray-500 font-medium">Free</th>
              <th className="py-4 px-6 text-center text-gray-500 font-medium">Pro</th>
              <th className="py-4 px-6 text-center text-gray-500 font-medium">Premium</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-4 px-6">{feature.name}</td>
                <td className="py-4 px-6 text-center">{feature.free}</td>
                <td className="py-4 px-6 text-center">{feature.pro}</td>
                <td className="py-4 px-6 text-center">{feature.premium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}