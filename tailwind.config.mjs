/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgrey:"#60695C",
        lightgrey:"#1A1F1680",
        black:"#1A1F16",
        white:"#FFFFFF",
        red:"#E5252C",
        yellow:"#E6D117",
        lightblue:"#BFD1E5",
        darkgreen:"#105E46",
        green:"#12805D",
        lightgreen:"#02D693"
      },
      fontFamily: {
        cabin: ['"Cabin"', 'sans-serif'], // Add Cabin font with fallback to sans-serif
      },
    },
  },
  plugins: [],
};
