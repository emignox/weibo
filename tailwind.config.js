/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
  plugins: [],
};
