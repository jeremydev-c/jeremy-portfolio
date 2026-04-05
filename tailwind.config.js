/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fff5f5',
          100: '#ffe0e0',
          200: '#ffc7c7',
          300: '#ffa3a3',
          400: '#ff6b6b',
          500: '#ff3b3b',
          600: '#e62e2e',
          700: '#c42525',
          800: '#a11e1e',
          900: '#7f1818',
        },
        carbon: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#141414',
          900: '#0a0a0a',
          950: '#000000',
        },
      },
    },
  },
  plugins: [],
};
