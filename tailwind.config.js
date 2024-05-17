/** @type {import('tailwindcss').Config} */

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme = {
  extend: {
    fontFamily: {
      chillax:['var(--font-chillax)', 'sans-serif'],
      satoshi:['var(--font-satoshi)', 'sans-serif'],
      objective:['var(--font-objective)', 'sans-serif'],
    },
    fontSize: {
      '40px' : '2.5rem',
      clamp: "clamp(10px, 20px, 40px)",
    },
    spacing: {
      '30': '7.5rem',
    },
    colors: {
      // New Deisgn Colors
      'primary-green' : 'rgba(53, 181, 180, 1)',
      'primary-green-light' : 'rgba(53, 181, 180, 0.2)',
      'primary-blue' : 'rgba(0, 46, 80, 1)',
      'primary-blue-light' : 'rgba(0, 46, 80, 0.5)',
      'primary-violet' : 'rgba(33, 32, 60, 1)',
      'primary-gray-light' : 'rgba(249, 249, 249, 1)',
    },
  },
};
export const plugins = [];
