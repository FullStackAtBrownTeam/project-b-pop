import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
//import { Navbar, Nav, NavDropdown } from "react-bootstrap";
//import { PrivateRoute } from "../App";

import MyGroups from "./MyGroups";
import Favorites from "./Favorites";
import Profile from "./Profile";

const Home = (props) => {
  return (
    <div>
      <h1>B-POP Forum</h1>
      <ul>
        <li>
          <a href={"/MyGroups"}>My Groups</a>
        </li>
        <li>
          <a href={"/Favorites"}>Favorites</a>
        </li>
        <li>
          <a href={"/Profile"}>Profile</a>
        </li>
      </ul>
      <BrowserRouter>
        <Switch>
          <Route exact path="/MyGroups" component={MyGroups} />
          <Route exact path="/Favorites" component={Favorites} />
          <Route exact path="/Profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Home;
