/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text": "#D5E7F3", // light white
        "secondary-text": "#FFAB3C", // yellow type
        "primary-bg": "#3D0066", // blue type
      }
    },
  },
  plugins: [],
}