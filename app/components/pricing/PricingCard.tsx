interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  billingPeriod?: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  buttonText,
  isPopular = false,
  billingPeriod
}: PricingCardProps) {
  return (
    <div className={`
      relative bg-white rounded-lg shadow-lg p-8
      ${isPopular ? 'ring-2 ring-dodger scale-105' : ''}
    `}>
      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="bg-dodger text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold">{price}</span>
          {billingPeriod && (
            <span className="text-gray-500">/{billingPeriod}</span>
          )}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-dodger shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`
        w-full py-3 px-4 rounded-md font-medium transition-all
        ${isPopular 
          ? 'bg-dodger text-white hover:brightness-90' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }
      `}>
        {buttonText}
      </button>
    </div>
  );
}