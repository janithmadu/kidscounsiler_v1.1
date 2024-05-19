import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      

      textColor:{
        "web-text-gray":"#626262",
        "web-text-black":"#000000",
      },
      backgroundColor:{
        "web-bg-blue":"#006FFF"
      },
      fontSize:{
        "para-size":"19.2px",
        "h4titile-size":"27.65px"
      },
      minWidth:{
        "web-bg-width":"220px"
      },
      minHeight:{
        "web-bg-height":"206px"
      },
      maxWidth:{
        "web-bg-width":"220px"
      },
      maxHeight:{
        "web-bg-height":"206px"
      },
      backgroundImage: {
        'ServiceImage': "url('/Child_service_Card.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;
