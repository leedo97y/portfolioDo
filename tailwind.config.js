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
    borderWidth: {
      DEFAULT: '1px',
      0.5: '0.5px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      8: '8px',
    },
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
