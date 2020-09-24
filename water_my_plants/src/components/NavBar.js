import React, { useState } from "react";
import {
	Hidden,
	IconButton,
	Menu,
	MenuItem,
	Typography,
} from "@material-ui/core";
import { NavWrapper } from "../theme/muiStyles";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
	const [anchorElement, setAnchorElement] = useState(null);

	const handleMenuClick = (e) => {
		setAnchorElement(e.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorElement(null);
	};

	const options = ["Home", "About", "Environment"];

	return (
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
						<MenuItem key={option} onClick={handleMenuClose}>
							{option}
						</MenuItem>
					))}
				</Menu>
			</Hidden>
			<Hidden smDown>
				<Typography variant="h4">Water My Plants</Typography>
				{options.map((option) => (
					<Typography key={option} variant="h5">
						{option}
					</Typography>
				))}
			</Hidden>
		</NavWrapper>
	);
};

export default NavBar;
