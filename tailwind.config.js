/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D2137',
        secondary: '#195712',
        tertiary: '#39a34a',
        brand: {
          navy: '#0D2137',
          green: '#195712',
          orange: '#39a34a',
        },
        accent: {
          lime: '#BCD630',
          teal: '#457A8C',
          gray: '#ABB5B3',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
