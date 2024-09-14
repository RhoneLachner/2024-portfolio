// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    // Include all files in app/
    './pages/**/*.{js,ts,jsx,tsx}',  // If using pages directory
    './components/**/*.{js,ts,jsx,tsx}', // If components are outside app/
    './src/**/*.{js,ts,jsx,tsx}',    // Include all files in src/ if you still have it
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
