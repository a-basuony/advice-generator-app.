/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          200: "hsl(193, 38%, 86%)",
          600: "hsl(217, 19%, 38%)",
          900: "hsl(217, 19%, 24%)",
          950: "hsl(218, 23%, 16%)",
        },
        accent: {
          300: "hsl(150, 100%, 66%)",
        },
      },
    },
  },
  plugins: [],
};
