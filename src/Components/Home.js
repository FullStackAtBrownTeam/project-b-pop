import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "bootstrap/dist/css/bootstrap.css";

import BLogo from "./b.png";

import MyGroups from "./MyGroups";
import Favorites from "./Favorites";
import Profile from "./Profile";
import MainFeed from "./MainFeed";

const Home = (props) => {
  return (
    <BrowserRouter>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-nav">
          <a href="/">
            <img className="logoIcon" src={BLogo} alt="Logo" href="/" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/MyGroups">
                  My Groups
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Favorites">
                  Favorites
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Profile">
                  Profile
                </a>
              </li>
            </ul>
            <div>
              <button className="rightDivButtons">Log In</button>
              <button className="rightDivButtons">Sign Up</button>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={MainFeed} />
          <Route path="/MyGroups" exact component={MyGroups} />
          <Route path="/Favorites" component={Favorites} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Home;
