export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      'Upload up to 3 statements/month',
      'Basic spending analysis',
      'Export to CSV',
      'Email support'
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$14',
    description: 'One-time payment, lifetime access',
    features: [
      'All Free features',
      'Unlimited statement uploads',
      'Advanced analytics dashboard',
      'Custom categories',
      'Priority email support'
    ],
    buttonText: 'Buy Now',
    isPopular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$12',
    description: 'For power users who need more',
    billingPeriod: 'month',
    features: [
      'All Pro features',
      'Real-time transaction monitoring',
      'AI-powered insights',
      'Multiple account linking',
      'Premium support'
    ],
    buttonText: 'Subscribe Now',
  },
];

export const features = [
  {
    name: 'Statement Uploads',
    free: '3/month',
    pro: 'Unlimited',
    premium: 'Unlimited'
  },
  {
    name: 'Analytics Dashboard',
    free: 'Basic',
    pro: 'Advanced',
    premium: 'Advanced'
  },
  {
    name: 'Export Formats',
    free: 'CSV',
    pro: 'CSV, PDF, Excel',
    premium: 'CSV, PDF, Excel'
  },
  {
    name: 'Custom Categories',
    free: '✕',
    pro: '✓',
    premium: '✓'
  },
  {
    name: 'Transaction Monitoring',
    free: '✕',
    pro: '✕',
    premium: '✓'
  },
  {
    name: 'AI Insights',
    free: '✕',
    pro: '✕',
    premium: '✓'
  },
  {
    name: 'Account Linking',
    free: '1',
    pro: '3',
    premium: 'Unlimited'
  },
  {
    name: 'Support',
    free: 'Email',
    pro: 'Priority Email',
    premium: 'Premium 24/7'
  }
];