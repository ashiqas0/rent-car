/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory: 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container: {
      padding: {
        DEFAULT: '2pX',
      },
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "1400px",
    },

    extend: {
      backgroundColor: {
        theme: 'var(--color-theme)',
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",

      },
      colors: {
        text: "var(--color-text)",
        bordar: "var(--color-border)"
      },
    },
  },
  plugins: [],
}
