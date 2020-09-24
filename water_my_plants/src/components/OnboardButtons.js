import { Button, makeStyles, ThemeProvider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import { primaryTheme } from "../theme/muiStyles";

const useButtonStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(0, 2.5, 1, 2.5),
	},
}));
const SignUpButton = withStyles({
	root: {
		margin: "0 1.25rem .5rem 1.25rem ",
	},
})(Button);
const Buttons = () => {
	const buttonClasses = useButtonStyles();
	return (
		<div>
			<ThemeProvider theme={primaryTheme}>
				<Button
					size="large"
					variant="outlined"
					color="primary"
					className={buttonClasses.margin}>
					<NavLink
						to="/login"
						style={{ color: "white", textDecoration: "none" }}>
						Login
					</NavLink>
				</Button>

				<SignUpButton size="large" variant="outlined" color="primary">
					<NavLink
						to="/signup"
						style={{ color: "white", textDecoration: "none" }}>
						Sign Up
					</NavLink>
				</SignUpButton>
			</ThemeProvider>
		</div>
	);
};

export default Buttons;
