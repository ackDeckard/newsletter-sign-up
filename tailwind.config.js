/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0%)" },
          "25%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(5%)" },
        },
        opacitysettings: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        spin: {
          "0%": { transform: "rotate(0.0deg)" },
          "50%": { transform: "rotate(-18deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        opacityCreator: "opacitysettings 2.7s ease-in forwards",
      },
      listStyleImage: {
        iconlist: 'url("/icon-list.svg")',
      },
    },
    colors: {
      bgColor: "hsla(234, 17%, 26%, 1)",
      titleColor: "hsla(234, 29%, 20%, 1)",
      emailColor: "hsl(234, 29%, 20%)",
      errorColor: "hsl(4, 100%, 67%, 1)",
      white: "hsla(0, 0%, 100%, 1)",
      topGradient: "hsl(15, 100%, 61%)",
      bottomGradient: "hsl(346, 100%, 66%)",
      inputBorder: "hsla(243, 28%, 13%, 1)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
