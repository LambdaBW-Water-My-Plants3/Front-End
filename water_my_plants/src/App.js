import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { FormWrapper } from "./theme/muiStyles";
import NavBar from "./components/NavBar";
import Buttons from "./components/OnboardButtons";

function App() {
	return (
		<div className="App">
			<NavBar />
			<header className="App-header">
				<Buttons />
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
