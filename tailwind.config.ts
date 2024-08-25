import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    keyframes:{
       blinkingBg:{
        "0%":{backgroundColor:"#FFF685"},
        "20%":{backgroundColor:"#0049B7"},
        "40%":{backgroundColor:"#f95d9b"},
        "60%":{backgroundColor:"#ff414e"},
        "80%":{backgroundColor:"pink"},
        "100%":{backgroundColor:"#007f4f"},
       }
    },
    animation:{
      blinkerbg:'blinkingBg 4s ease-in-out infinite'
    },
    },
  },
  plugins: [],
};
export default config;
