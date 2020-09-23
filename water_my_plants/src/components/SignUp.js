import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { NavLink, Redirect } from "react-router-dom";
import Axios from "axios";
import { primaryTheme, SignUpWrapper } from "../theme/muiStyles";

const SignUp = () => {
	const { register, handleSubmit, errors } = useForm();
	const [redirect, setRedirect] = useState(false);

	const onSubmit = (data) => {
		console.log(data);
		Axios.post("https://watermyplantunit4.herokuapp.com/signup", data)
			.then((response) => {
				console.log(response);
				console.log(response.status);
				if (response.status === 201) {
					alert("Signup successful! Please login to continue.");
					setRedirect(true);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	if (redirect === true) {
		return <Redirect to="/login" />;
	} else {
		return (
			<ThemeProvider theme={primaryTheme}>
				<SignUpWrapper color="secondary">
					<h1>Let's get savvy</h1>
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
							name="primaryemail"
							label="Email"
							type="email"
							inputRef={register({ required: true })}
							required
							color="primary"
							fullWidth
							margin="normal"
							variant="outlined"
							placeholder="happytree@myplants.com"
							helperText={
								errors.phone_number?.type === "required" &&
								"Please enter a valid email"
							}
						/>
						<Button
							fullWidth
							variant="outlined"
							color="secondary"
							type="submit">
							Submit
						</Button>
					</form>
					<p>
						Already have an account?{" "}
						<NavLink
							to="login"
							style={{ textDecoration: "none", color: "#08521C" }}>
							Sign in here!
						</NavLink>
					</p>
				</SignUpWrapper>
			</ThemeProvider>
		);
	}
};

export default SignUp;
