import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,ts,js}"],
  theme: {
    fontFamily: {
      ...fontFamily,
      sans: ["integral-CF", ...fontFamily.sans],
    },
    extend: {
      colors:{
        "band-red":{
          "500":"#D43647"
        }
      }
    },
  },
  plugins: [],
};
