/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3556AB",
        secondary: "#0D2972",
        success: "#53DA69",
        error: "#AB3535",
        warning: "#F2C94C",
        light: "#F3F3F3",
        darkGray: "#8D8D8D",
      },
      borderColor: {
        primary: "#0D2972",
        success: "#49C25D",
        error: "#720D0D",
        warning: "#9EB031",
      },
    },
  },
  plugins: [],
};
