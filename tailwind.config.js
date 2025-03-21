/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',  // Asegúrate de incluir los directorios donde usarás Tailwind
      './src/**/*.{js,ts,jsx,tsx}',    // Si usas un directorio `src`, también inclúyelo
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  