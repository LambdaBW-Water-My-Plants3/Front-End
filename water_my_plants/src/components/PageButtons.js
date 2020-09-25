import Button from "@material-ui/core/Button";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import { primaryTheme } from "../theme/muiStyles";

const useButtonStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(0.5, 3, 1, 3),
	},
}));
const PageButtons = () => {
	const buttonClasses = useButtonStyles();
	return (
		<div>
			<ThemeProvider theme={primaryTheme}>
				<Button
					size="medium"
					variant="outlined"
					color="primary"
					className={buttonClasses.margin}>
					<NavLink
						to="/userpage"
						style={{ color: "white", textDecoration: "none" }}>
						Profile
					</NavLink>
				</Button>

				<Button
					size="medium"
					variant="outlined"
					color="primary"
					className={buttonClasses.margin}>
					<NavLink
						to="/plantpage"
						style={{ color: "white", textDecoration: "none" }}>
						My Plants
					</NavLink>
				</Button>

				<Button
					size="medium"
					variant="outlined"
					color="primary"
					className={buttonClasses.margin}>
					<NavLink
						to="/item"
						style={{ color: "white", textDecoration: "none" }}>
						Gallery
					</NavLink>
				</Button>
			</ThemeProvider>
		</div>
	);
};

export default PageButtons;
