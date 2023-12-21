/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        championsregular: ['Champions Regular', 'sans'],
        championslight: ['Champions Light', 'sans'],
        championsbold: ['Champions', 'sans'],
      },
    },
  },
  plugins: [],
}