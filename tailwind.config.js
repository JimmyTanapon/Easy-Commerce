/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ad00ff",

          secondary: "#00b2ff",

          accent: "#00d4ff",

          neutral: "#0d0d0d",

          "base-100": "#30263b",

          info: "#00ecff",

          success: "#3b7e00",

          warning: "#af7900",

          error: "#fb0042",
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  },
};
