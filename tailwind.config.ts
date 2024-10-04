import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#213D39',
        secondary: '#6C57DB',
        bgSky:'#F4F9FF',
        grey:'#FBFBFB'
       
       
       
        },
        backgroundGradient: {
          'custom-gradient': 'linear-gradient(to right, rgba(108, 87, 219, 1), rgba(12, 25, 31, 0.79))',
        },
        fontSize:{
          'sm':'16px',
          'md':'24px',
          'lg':'32px',
          'xl':'48px',
          '2xl':'64px',
          '3xl':'96px',
          '4xl':'128px',
        
        },
     
    },
  },
  plugins: [],
};
export default config;
