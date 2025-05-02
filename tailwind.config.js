// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        frost: '#F9FBFD',
        obsidian: '#1F1F1F',
        neon: '#00E0C6',
        steel: '#7D8899',
        glacier: '#E3E8EF',
      },
    },
    
  },
  plugins: [],
};

theme: {
  extend: {
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
    },
  },
}
