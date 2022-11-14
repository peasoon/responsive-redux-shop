/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
			screens:{
				'tablet': '640px',
				// => @media (min-width: 640px) { ... }
	
				'laptop': '1024px',
				// => @media (min-width: 1024px) { ... }
	
				'desktop': '1280px',
				// => @media (min-width: 1280px) { ... }
			},
			colors: {
				'pizdatiy': 'hsl(294.39, 54.87%, 61.76%)',
			},
			fontFamily: {
				'main': ['Phanthom'],
			},
			gridTemplateColumns: {
        'fill-16': 'repeat(auto-fill, minmax(100px, 1fr))',
        'fill-20': 'repeat(auto-fill, minmax(5rem, 1fr))',
        // etc.
      },
		}
  },
  plugins: [],
};
