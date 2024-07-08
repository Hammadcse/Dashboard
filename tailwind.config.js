/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      avenir: ["Avenir", "system-ui"]
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui"]
      }
    }
  },
  plugins: [],
}

