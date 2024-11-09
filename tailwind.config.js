/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [  "./src/**/*.{js,jsx,ts,tsx}",
      './components/**/*.{js,jsx,ts,tsx}',
	  './node_modules/@shadcn/ui/**/*.js'
    ],
  theme: {
  	extend: {
		fontFamily: {
			vazir: ['"Vazir Matn"', 'sans-serif'],
		  },
		  colors: {
			primary: {
			  200: "#BFFFF6",
			  300: "#4FF9F2",
			  400: "#1BEE63",
			  500: "#03C9C9",
			  600: "#00A0A3",
			  700: "#047C81",
			},
			secondary: {
			  200: "#FFC478",
			  300: "#FFC152",
			  400: "#FFAB16",
			  500: "#FF8F00",
			  600: "#CC6902",
			  700: "#A1510B",
			},
			accent: {
			  200: "#9DDAF9",
			  300: "#1EB5FF",
			  400: "#0698FF",
			  500: "#007DF0",
			  600: "#0865C5",
			  700: "#0D579B",
			},
			natural: {
			  black: "#131313",
			  gray1: "#3D3D3D",
			  gray2: "#797979",
			  gray3: "#B7B7B7",
			  gray4: "#E6E6E6",
			  white: "#FFFFFF",
			},
			state: {
			  success: {
				green1: "#00DD16",
				green2: "#00FF1A",
				green3: "#50FF61",
			  },
			  error: {
				red1: "#DD0000",
				red2: "#FF0000",
				red3: "#FF5050",
			  },
			  danger: {
				yellow1: "#F2D806",
				yellow2: "#FFF500",
			  },
			},
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			card: {
			  DEFAULT: "hsl(var(--card))",
			  foreground: "hsl(var(--card-foreground))",
			},
			popover: {
			  DEFAULT: "hsl(var(--popover))",
			  foreground: "hsl(var(--popover-foreground))",
			},
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
		  },

  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		// colors: {
  		// 	background: 'hsl(var(--background))',
  		// 	foreground: 'hsl(var(--foreground))',
  		// 	card: {
  		// 		DEFAULT: 'hsl(var(--card))',
  		// 		foreground: 'hsl(var(--card-foreground))'
  		// 	},
  		// 	popover: {
  		// 		DEFAULT: 'hsl(var(--popover))',
  		// 		foreground: 'hsl(var(--popover-foreground))'
  		// 	},
  		// 	primary: {
  		// 		DEFAULT: 'hsl(var(--primary))',
  		// 		foreground: 'hsl(var(--primary-foreground))'
  		// 	},
  		// 	secondary: {
  		// 		DEFAULT: 'hsl(var(--secondary))',
  		// 		foreground: 'hsl(var(--secondary-foreground))'
  		// 	},
  		// 	muted: {
  		// 		DEFAULT: 'hsl(var(--muted))',
  		// 		foreground: 'hsl(var(--muted-foreground))'
  		// 	},
  		// 	accent: {
  		// 		DEFAULT: 'hsl(var(--accent))',
  		// 		foreground: 'hsl(var(--accent-foreground))'
  		// 	},
  		// 	destructive: {
  		// 		DEFAULT: 'hsl(var(--destructive))',
  		// 		foreground: 'hsl(var(--destructive-foreground))'
  		// 	},
  		// 	border: 'hsl(var(--border))',
  		// 	input: 'hsl(var(--input))',
  		// 	ring: 'hsl(var(--ring))',
  		// 	chart: {
  		// 		'1': 'hsl(var(--chart-1))',
  		// 		'2': 'hsl(var(--chart-2))',
  		// 		'3': 'hsl(var(--chart-3))',
  		// 		'4': 'hsl(var(--chart-4))',
  		// 		'5': 'hsl(var(--chart-5))'
  		// 	}
  		// }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

