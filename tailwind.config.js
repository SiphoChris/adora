/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#21164c",
        secondaryColor: "#6036ff"
      }
    },
  },
  plugins: [],
}
