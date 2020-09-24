import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { withStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import PrivateRoute from "./components/PrivateRoute";
import PlantPage from "./components/PlantPage";
import UserPage from "./components/UserPage";
import Item from './components/Item'

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
			<button>
				<Link to="/login">Login</Link>
			</button>
			<button>
				<Link to="/signup">SignUp</Link>
			</button>
			<header className="App-header">
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
