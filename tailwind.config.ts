import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        amatic: ['Amatic SC', 'serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #f96e2a, #f96e2a)',
        'text-gradient': 'linear-gradient(to right, #ee9226, #ffd11a)',
      },

      colors: {
        primary: '#00c06d',
        secondary: '#f96e2a',
      },
    },
  },
  plugins: [],
} satisfies Config;
