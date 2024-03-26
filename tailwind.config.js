/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      outlet: ["'Outfit'", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "card": "0 30px 5px 20px rgb(0, 0, 0, 0.06), 0 30px 5px 50px rgb(0, 0, 0, 0.03)",
      },
    },
  },
};