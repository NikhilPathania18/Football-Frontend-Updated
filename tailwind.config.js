/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        championsregular: ['Champions Regular', 'sans-serif'],
        championslight: ['Champions Light', 'sans-serif'],
        championsbold: ['Champions', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif']
      },
    },
  },
  plugins: [],
}