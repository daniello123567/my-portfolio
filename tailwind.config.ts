import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        myBabe:'hsla(158, 23%, 18%, 0.7)'
      },
      fontSize:{
        'my-guy': 'clamp(3.2rem, .5692rem + 8.238vw, 13.75rem);',
        "brother-gee":"clamp(1rem, .8852rem + .4898vw, 1.375rem)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "babe":"linear-gradient(114.3deg, #137E39 0.2%, #08415B 68.5%)",
        "guy":"radial-gradient(at 10.945907584141779% 90.51953300416784%, hsla(321.0878661087866, 97.55102040816327%, 48.0392156862745%, 1) 0%, hsla(321.0878661087866, 97.55102040816327%, 48.0392156862745%, 0) 100%), radial-gradient(at 65.88701274259623% 11.106780562389474%, hsla(230.96234309623432, 97.55102040816327%, 48.0392156862745%, 1) 0%, hsla(230.96234309623432, 97.55102040816327%, 48.0392156862745%, 0) 100%), radial-gradient(at 28.709603843524146% 55.99612551660385%, hsla(321.0878661087866, 97.55102040816327%, 48.0392156862745%, 1) 0%, hsla(321.0878661087866, 97.55102040816327%, 48.0392156862745%, 0) 100%), radial-gradient(at 99.7519368640428% 53.4780517062232%, hsla(230.96234309623432, 97.55102040816327%, 48.0392156862745%, 1) 0%, hsla(230.96234309623432, 97.55102040816327%, 48.0392156862745%, 0) 100%), radial-gradient(at 52.12881136784482% 12.418780358437198%, hsla(321.0878661087866, 97.55102040816327%, 48.0392156862745%, 1) 0%, hsla(321.0878661087866, 97.55102040816327%, 48.0392156862745%, 0) 100%), radial-gradient(at 87.45088444604845% 30.581489903061776%, hsla(230.96234309623432, 97.55102040816327%, 48.0392156862745%, 1) 0%, hsla(230.96234309623432, 97.55102040816327%, 48.0392156862745%, 0) 100%), radial-gradient(at 70.89264398669586% 91.88565802176876%, hsla(321.0878661087866, 97.55102040816327%, 48.0392156862745%, 1) 0%, hsla(321.0878661087866, 97.55102040816327%, 48.0392156862745%, 0) 100%)",
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
