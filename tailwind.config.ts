import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs:'0.8rem',
        sm: '0.9rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
          epilogue: ['epilogue', 'sans-serif'],
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        red: {
          300: "#EA9A93" //design red
        },
        blue: {
          300: "#D5DDFB",
          500: "#758FF0", //software blue 
        },

      },
    },
  },
  plugins: [],
}
export default config


