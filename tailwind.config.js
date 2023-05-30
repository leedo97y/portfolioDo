/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      xxs: { min: '0px', max: '449px' },
      xs: { min: '450px', max: '649px' },
      sm: { min: '650px', max: '819px' },
      md: { min: '820px', max: '1023px' },
      lg: { min: '1080px' },
    },
  },
  plugins: [],
};

// sm 사이즈 부분 더 줄이기....
