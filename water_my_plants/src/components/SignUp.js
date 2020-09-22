import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, createMuiTheme, TextField } from "@material-ui/core";
import { withStyles, ThemeProvider } from "@material-ui/styles";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers";
import bgImg from "../images/littlePlant.jpg";

// const schema = yup.object().shape({
// username: yup.string().required("Please enter a username"),
// password: yup.string().required("Please enter a password"),
// phone_number: yup
// 	.string()
// 	.required("A valid phone number is required")
// 	.matches(
// 		/^[(]{0,1}[0-9]{3}[)]{0,1}[-]{1}[0-9]{3}[-]{1}[0-9]{4}$/g,
// 		"Invalid number"
// 	),
// });

const SignUp = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => console.log(data);

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: "#2e7d32",
			},
			secondary: {
				main: "#448aff",
			},
		},
	});

	const SignUpWrapper = withStyles({
		root: {
			border: "1px solid #448aff",
			borderRadius: "25px",
			color: "black",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			minWidth: "250px",
			width: "70%",
			maxWidth: "600px",
			height: "80vh",
			overflowY: "scroll",
			padding: [[0, 20, 50]],
			backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.2)), url(${bgImg})`,
			backgroundPosition: "center",
		},
	})(Box);

	return (
		<ThemeProvider theme={theme}>
			<SignUpWrapper color="secondary">
				<h1>SignUp</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextField
						name="username"
						label="Username"
						inputRef={register({ required: true, minLength: 2 })}
						required
						color="primary"
						fullWidth
						margin="normal"
						variant="outlined"
						placeholder="Enter a username"
						helperText={
							errors.username?.type === "minLength" &&
							"Username is too short! Please enter a valid username."
						}
					/>
					<TextField
						name="password"
						label="Password"
						type="password"
						inputRef={register({ required: true })}
						required
						color="primary"
						fullWidth
						margin="normal"
						variant="outlined"
						placeholder="Enter a password"
						helperText={
							errors.password?.type === "minLength" &&
							"Password is too short! Please enter a validpassword."
						}
					/>
					<TextField
						name="phone_number"
						label="Phone Number"
						type="tel"
						inputRef={register({
							required: true,
							pattern: /^[(]{0,1}[0-9]{3}[)]{0,1}[-]{1}[0-9]{3}[-]{1}[0-9]{4}$/g,
						})}
						required
						color="primary"
						fullWidth
						margin="normal"
						variant="outlined"
						placeholder="555-555-5555"
						helperText={
							errors.phone_number?.type === "pattern" &&
							"Please enter a valid phone number"
						}
					/>
					<Button fullWidth variant="outlined" color="secondary" type="submit">
						Submit
					</Button>
				</form>
				<p>Already a member? Sign In here!</p>
			</SignUpWrapper>
		</ThemeProvider>
	);
};

export default SignUp;
