import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

function App() {
	const FormWrapper = withStyles({
		root: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "100vh",
		},
	})(Box);

	return (
		<div className="App">
			<FormWrapper>
				<SignUp />
			</FormWrapper>
		</div>
	);
}

export default App;
