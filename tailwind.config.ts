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
        mansalva: ['Mansalva', 'serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #ee9226, #ffd11a)',
        'text-gradient': 'linear-gradient(to right, #ee9226, #ffd11a)',
      },

      colors: {
        primary: '#ffd11a',
      },
    },
  },
  plugins: [],
} satisfies Config;
