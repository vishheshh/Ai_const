/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ["bodoni", "gilroy"], // Add your font name here
        playball: ["playball", "gilroy"], // Add your font name here
      },
    },
  },
  plugins: [],
};
