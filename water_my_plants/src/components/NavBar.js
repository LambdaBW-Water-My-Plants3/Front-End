import React, { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { NavWrapper, primaryTheme } from "../theme/muiStyles";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeProvider } from "@material-ui/styles";

const NavBar = () => {
	const [anchorElement, setAnchorElement] = useState(null);

	const handleMenuClick = (e) => {
		setAnchorElement(e.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorElement(null);
	};

	const linkClick = (e) => e.preventDefault;

	const options = [
		{
			name: "Home",
			link: "https://sad-banach-bed902.netlify.app/index",
		},
		{
			name: "Articles",
			link: "https://sad-banach-bed902.netlify.app/articles",
		},
		{
			name: "Environment",
			link: "https://sad-banach-bed902.netlify.app/environment",
		},
		{
			name: "Contact",
			link: "https://sad-banach-bed902.netlify.app/contact",
		},
		{
			name: "Login",
			link: "/login",
		},
	];

	return (
		<ThemeProvider theme={primaryTheme}>
			<NavWrapper>
				<Hidden mdUp>
					<Typography variant="h5">Water My Plants</Typography>
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
						{options.map((option) => (
							<MenuItem key={option.name} onClick={handleMenuClose}>
								<Link onClick={linkClick} color="secondary" href={option.link}>
									{option.name}
								</Link>
							</MenuItem>
						))}
					</Menu>
				</Hidden>
				<Hidden smDown>
					<Typography variant="h4">Water My Plants</Typography>
					{options.map((option) => (
						<Typography key={option.name} variant="h5">
							<Link onClick={linkClick} color="inherit" href={option.link}>
								{option.name}
							</Link>
						</Typography>
					))}
				</Hidden>
			</NavWrapper>
		</ThemeProvider>
	);
};

export default NavBar;
