const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./src/**/*.{js,jsx,ts,tsx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-image': "url('/images/your-image.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],

}

