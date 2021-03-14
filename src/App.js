import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar";
import {
	BrowserRouter,
	Switch,
	Route,
	useHistory,
	useRouteMatch,
} from "react-router-dom";
import MyGroups from "./Components/MyGroups";
import Favorites from "./Components/Favorites";
import Profile from "./Components/Profile";
import MainFeed from "./Components/MainFeed";


function App() {
	return (
		<div>
			<NavBar />
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={MainFeed} />
					<Route path="/groups" exact component={MyGroups} />
					<Route path="/favorites" component={Favorites} />
					<Route path="/profile" component={Profile} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
