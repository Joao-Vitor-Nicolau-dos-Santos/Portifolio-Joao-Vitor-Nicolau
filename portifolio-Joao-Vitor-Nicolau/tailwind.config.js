/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/*/.{js,ts,jsx,tsx}", 
        "./components/*/.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
            'radial': 'radial-gradient(var(--tw-gradient-stops))',
          },
          fontFamily: {
            baskervville: ['"Baskervville SC"', 'serif'],
            gidole: ['Gidole', 'sans-serif'],
            nunito: ['"Nunito Sans"', 'sans-serif'],
            grotesk: ['"Space Grotesk"', 'sans-serif'],
            ysabeau: ['"Ysabeau SC"', 'sans-serif'],
          },
      },
    },
    plugins: [],
  };