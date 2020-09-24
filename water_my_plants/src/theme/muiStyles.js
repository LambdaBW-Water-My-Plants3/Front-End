import { withStyles } from "@material-ui/styles";
import { Box, createMuiTheme } from "@material-ui/core";
import bgImg from "../images/littlePlant.jpg";
import navBanner from "../images/navBanner.jpg";

export const primaryTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#22803B",
		},
		secondary: {
			main: "#08521C",
		},
	},
});

export const SignUpWrapper = withStyles({
	root: {
		border: "1px solid #22803B",
		borderRadius: "25px",
		color: "#08521C",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		minWidth: "250px",
		width: "70%",
		maxWidth: "800px",
		height: "75vh",
		maxHeight: "690px",
		padding: [[0, 20, 30]],
		backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.5)), url(${bgImg})`,
		backgroundPosition: "center",
	},
})(Box);

export const FormWrapper = withStyles({
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
})(Box);

export const NavWrapper = withStyles({
	root: {
		display: "flex",
		padding: [[10, 20]],
		justifyContent: "space-between",
		alignItems: "center",
		color: "white",
		backgroundImage: `linear-gradient(#22803b54, #22803b42), url(${navBanner})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		"& .MuiTypography-root": {
			fontFamily: "Alegreya Sans SC, sans-serif",
		},
	},
})(Box);
