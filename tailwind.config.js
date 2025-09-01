/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Gabarito', 'sans-serif'],
        body: ['Wix Madefor Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
