module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Space Grotesk', 'Sans-Serif'],
      body: ['Inter', 'Monospace'],
      mono: ['Space Grotesk']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}