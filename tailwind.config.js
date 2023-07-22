/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '410px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#001c30',
      'navy': '#176b87',
      'teal': '#64ccc5',
      'mint': '#dafffb',
      'white': '#ffffff',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4x1': '2rem',
      },
  },
  plugins:[],
}
}
