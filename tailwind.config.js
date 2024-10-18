/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      screens: {
        ssm: "480px",
        ssmAndMd: { 
          raw: '(min-width: 480px) and (max-width: 768px)' 
        },
        sheight: { 
          raw: '(max-height: 900px)' 
        }
      }
    },
  },
  plugins: [],
}

