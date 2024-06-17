/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        spray: ['"Rubik Spray Paint"'],
        paint: ['"Finger Paint"']

      },
      dropShadow: {
        'lg': ['0 5px 5px rgba(255, 255, 255, 0.3)', '0 15px 25px #1E7B06'],
        'xl': ['0 5px 15px rgba(255, 255, 255, 0.2)', '0 25px 25px #1E7B06'],
        '2xl': [
          '0 5px 5px rgba(255, 255, 255, 0.2)',
            '0 5px 25px #9bd300 '
        ]
      },
      boxShadow: {
        md: "0 0 60px -35px rgba(255, 255, 255, 0.6)",
        inner: "0 0 10px 5px rgba(255, 255, 255, 0.6)"
      }
    },
  },
  plugins: [],
}

