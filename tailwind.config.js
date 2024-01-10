/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/App/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    cotainer: {
      padding: {
        DEFAULT: '15PX',
      },
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },

    extend: {
      colors: {
        "primary":'#010851',
        "secondary":'#9A7AF1',
        "tertiary":'#707070',
        "pink":'#EE9AE5',
        
      },

      backgroundImage: {
        site: '',
        about: '',
      },
    },


  },
  plugins: [],
}
