/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //'brand-blue': '#007bff',
        //'light-blue': '#85d7ff',
      },
      fontFamily: {
        //sans: ['serif'],
        // Añade más familias de fuentes aquí
      },
      // Puedes extender otras propiedades aquí
    },
  },
  plugins: [],
}

