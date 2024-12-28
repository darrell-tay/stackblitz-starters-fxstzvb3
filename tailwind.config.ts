import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dodger': '#1E90FF',
        'ice': '#d9f4ff',
        'prussian': '#003153',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        modal: {
          '0%': { opacity: '0', transform: 'translate(0, 1rem)' },
          '100%': { opacity: '1', transform: 'translate(0, 0)' },
        },
      },
      animation: {
        'modal': 'modal 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;