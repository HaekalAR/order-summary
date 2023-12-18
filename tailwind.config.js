/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "r-verypaleblue": "hsl(225, 100%, 98%)",
      "r-paleblue": "hsl(225, 100%, 94%)",
      "r-brightblue": "hsl(245, 75%, 52%)",
      "r-desaturatedblue": "hsl(224, 23%, 55%)",
      "r-darkblue": "hsl(223, 47%, 23%)",
    },
  },
  plugins: [],
};
