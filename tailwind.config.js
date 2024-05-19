/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        default: "0 2px 5px rgba(0, 0, 0, 0.5)",
        lg: "0 2px 10px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        "weibo-blue": "#0084FF",
        "weibo-red": "#FF3E3E",
        "weibo-green": "#42C02E",
        "weibo-yellow": "#FFC300",
        "weibo-gray": "#F5F5F5",
        "weibo-dark": "#333333",
        "weibo-light": "#666666",
        "weibo-lighter": "#999999",
        "weibo-lightest": "#CCCCCC",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
