/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
      },
    },
    screens: {
      phone: '370px',
    },
    colors: {
      primary: '#F4E041',
      secondary: '#00BDD3',
      btn_disabled: '#B4B4B4',
    },
  },
  plugins: [],
}
