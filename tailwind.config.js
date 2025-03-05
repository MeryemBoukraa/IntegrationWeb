/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*","./src/*"],
  theme: {
    extend: {
      colors: {
          primary: '#E63946',
          secondary: '#A8201A',
          accent: '#F9C74F',
          background: '#F1FAEE',
          text: '#1D3557',
      },
  },
  },
  plugins: [],
}

