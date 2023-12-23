import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
          500: "#758FF0", //software blue 
        },

      },
    },
  },
  plugins: [],
}
export default config


