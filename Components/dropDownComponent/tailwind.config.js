/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-orange': 'linear-gradient(180deg, hsla(9, 99%, 62%, 1) 0%, hsla(19, 97%, 59%, 1) 100%)',
      },
    },
  },
  plugins: [],
};
