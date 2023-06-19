/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "streaming-black": "#1a1c20",
        "streaming-black-200": "#202128",
        "streaming-grey": "#686a77",
        "streamming-text": "#5f616e",
      },
    },
  },
  plugins: [],
};
