/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A2A2A',
        secondary: '#87CEEB',
        tertiary: '#3A3A3A',
        textPrimary: '#EAEAEA',
        textSecondary: '#8892b0',
        pageBackground: '#2A2A2A',
        headingText: '#F5F5F5',
        bodyText: '#EAEAEA',
        accent: '#8FF0A4',
        innerBackground: '#3A3A3A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        luckiestGuy: ['Luckiest Guy', 'cursive'],
      },
    },
  },
  plugins: [],
} 