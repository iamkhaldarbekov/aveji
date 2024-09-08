/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark": "#212529",
        "beige": "#DDD7C0",
        "red": "#E13A3A",
        "yellow": "#F9C67B"
      },
      margin: {
        "section": "120px",
        "section-mob": "48px"
      },
      fontFamily: {
        "helvetica": "Helvetica",
        "roboto": "Roboto"
      }
    },
    screens: {
      'sm': {'max': '375px'}
    }
  },
  plugins: [],
}

