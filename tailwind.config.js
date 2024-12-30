/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			screens: {
        sm: "428px",
		lScreen: "390px",
				bgScreen: "1440px",
			},

			fontFamily: {
				poppins: ['"Poppins", "sans-serif"'],
        rubik: ['"Rubik", "sans-serif" '],
			},

			colors: {
				primaryColor: "hsla(213, 100%, 35%, 1)",
				primaryContainer: "hsl(221, 100%, 87%)",
				placeholderColor: "hsla(0, 0%, 71%, 1)",
				imageColor: "hsla(207, 97%, 87%, 1)",
				accordionBg: "hsla(60, 11%, 92%, 1)",
			},
		},
	},
  plugins: [],
}

