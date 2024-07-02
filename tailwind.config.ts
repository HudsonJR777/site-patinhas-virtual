import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '2rem',
      screens:{
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xl1: "1368px",
        xl2: "1440px",
      
      }
    },
    extend: {
      screens: {
        sm: "640px",
        hmobile: "1140px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xl1: "1368px",
        xl2: "1440px",
        xl3: "1660px",
        xl4: "1920px",
        xl5: "2400px",
      },
      colors:{
        black_op: "rgba(0,0,0,0.7)",
        primaryColor: "#4a128c",
        primaryDarkeColor: "#3e0c7a",
        secondaryColor: "#ffb302",
      }
    },
  },
  plugins: [],
};
export default config;
