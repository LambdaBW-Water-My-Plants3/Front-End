import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
<<<<<<< HEAD
import { FormWrapper } from "./theme/muiStyles";
import NavBar from "./components/NavBar";
import Buttons from "./components/OnboardButtons";
=======
import { withStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import PrivateRoute from "./components/PrivateRoute";
import PlantPage from "./components/PlantPage";
import UserPage from "./components/UserPage";
import Item from './components/Item'
>>>>>>> 8c0b0444c4aa398a3d131fbded29e6db583bab6e

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
					<PrivateRoute exact path='/plantpage' component={PlantPage} />
					<PrivateRoute exact path='/userpage' component={UserPage} />
				</Switch>
			</header>
		</div>
	);
}

export default App;
