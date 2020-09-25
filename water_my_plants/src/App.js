import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { FormWrapper } from "./theme/muiStyles";
import NavBar from "./components/NavBar";
import Buttons from "./components/OnboardButtons";
import PrivateRoute from "./components/PrivateRoute";
import PlantPage from "./components/PlantPage";
import UserPage from "./components/UserPage";
import Item from "./components/Item";
import PageButtons from "./components/PageButtons";

function App() {
	return (
		<div className="App">
			<NavBar />
			<header className="App-header">
				<Switch>
					<PrivateRoute exact path="/plantpage">
						<PageButtons />
						<PlantPage />
					</PrivateRoute>
					<PrivateRoute exact path="/userpage">
						<PageButtons />
						<UserPage />
					</PrivateRoute>
					<PrivateRoute exact path="/item">
						<PageButtons />
						<Item />
					</PrivateRoute>
					<Route path="/signup">
						<Buttons />
						<FormWrapper>
							<SignUp />
						</FormWrapper>
					</Route>
					<Route path="/">
						<Buttons />
						<Login />
					</Route>
				</Switch>
			</header>
		</div>
	);
}

export default App;
