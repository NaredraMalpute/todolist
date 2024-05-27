export const gridTheme = {
	gridColumns: 12, // default 12
	breakpoints: {
		// defaults below
		xxl: 1600,
		xl: 1440,
		lg: 1200,
		md: 992,
		sm: 576,
		xs: 575,
		// or you can use aliases
		// veryGiant: 1440,
		// giant: 1200,
		// desktop: 992,
		// tablet: 768,
		// phone: 576,
		// smaller: 575,
	},
	row: {
		padding: 0, // default 15
	},
	col: {
		padding: 12,
	},
	container: {
		padding: 24,
		maxWidth: {
			xxl: 1440,
			xl: 1440,
			lg: 1440,
			md: 1440,
			sm: 1440,
			xs: 1440,
		},
	},
};

const theme = {
	name: "Main Theme",
	fontSize: ["12px", "14px", "16px", "18px", "28px", "36px", "48px"],
	lineHeight: ["1", "1.25", "1.5", "1.75", "1.8"],
	color: {
		primary: "#2C7D27",
		// lightGreen: "#e9ffe8",
		lightGreen: "#5AA621",
		lightGrayGreen: "#E9FFE8",
		secondary: "#3D3D3D",
		black: "#000000",
		white: "#ffffff",
		customBlue: "#3E35F1",
		darkBlue: "#040224",
		red: "red",
		customRed: "#FF3A3A",
		lightGray: "#F9F9F9",
		borderGray: "#DEDEDE",
		lightBlue: "#655DFF",
		thumbColor: "#a8a8a8",
		lightPink: "#FF6363",
		Gray: "#7F7F7F",
		lightBorder: "#EFEFEF",
		lightSkyBlue: "#F3F7FF",
		lightRed: "#FFF3F3",
	},
	space: [
		"4px",
		"8px",
		"12px",
		"14px",
		"16px",
		"32px",
		"48px",
		"64px",
		"96px",
		"8rem",
		"128px",
		"256px",
		"384px",
	],
	breakpoint: {
		desktop: "992px",
		tablet: "768px",
		phone: "576px",
	},
	transition: {
		default: ".3s ease all",
		slower: ".5s ease all",
	},
	zIndex: [],
};

export default theme;
