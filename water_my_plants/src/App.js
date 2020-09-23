import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {
	Button,
	makeStyles,
	Menu,
	MenuItem,
	IconButton,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { NavWrapper, FormWrapper, primaryTheme } from "./theme/muiStyles";
import MenuIcon from "@material-ui/icons/Menu";

const useButtonStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(0, 2.5, 1, 2.5),
	},
}));

function App() {
	const [anchorElement, setAnchorElement] = useState(null);

	const handleMenuClick = (e) => {
		setAnchorElement(e.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorElement(null);
	};

	const buttonClasses = useButtonStyles();

	return (
		<div className="App">
			<NavWrapper>
				<h2>Water My Plants</h2>
				<IconButton
					edge="end"
					color="inherit"
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleMenuClick}>
					<MenuIcon />
				</IconButton>
				<Menu
					id="simple-menu"
					anchorEl={anchorElement}
					keepMounted
					open={Boolean(anchorElement)}
					onClose={handleMenuClose}>
					<MenuItem onClick={handleMenuClose}>Home</MenuItem>
					<MenuItem onClick={handleMenuClose}>About</MenuItem>
					<MenuItem onClick={handleMenuClose}>Environment</MenuItem>
				</Menu>
			</NavWrapper>

			<header className="App-header">
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

						<Button
							size="large"
							variant="outlined"
							color="primary"
							className={buttonClasses.margin}>
							<NavLink
								to="/signup"
								style={{ color: "white", textDecoration: "none" }}>
								Sign Up
							</NavLink>
						</Button>
					</ThemeProvider>
				</div>

				<Switch>
					<Route path="/login">
						<Login />
					</Route>

					<Route path="/signup">
						<FormWrapper>
							<SignUp />
						</FormWrapper>
					</Route>
				</Switch>
			</header>
		</div>
	);
}

export default App;
