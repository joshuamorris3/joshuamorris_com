/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        background: "#f9f9f9",
        text: "#21211f",
      },
    },
  },
  plugins: [],
};
