/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B21B6',
        'primary-light': '#885CF6',
        background: '#18181B',
        text: '#E4E4E7',
        accent: '#06B6D4',
        'accent-secondary': '#84CC16',
      },
      boxShadow: {
        glow: '0 10px 30px rgba(107,70,255,0.12), 0 6px 12px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}

export default config