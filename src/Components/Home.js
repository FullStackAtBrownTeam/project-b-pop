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
//import { PrivateRoute } from "../App";

import MyGroups from "./MyGroups";
import Favorites from "./Favorites";
import Profile from "./Profile";

const Home = (props) => {
  return (
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

      <div>
        <div className="contentColumn">
          <div className="featuredRow">
            <h1>Featured Gallery</h1>
          </div>
          <div>Your Posts</div>
        </div>
        <div className="menuColumn">
          <table className="sideMenu">
            <thead>
              <h3>Easy Access</h3>
            </thead>
            <tr className="menuRow">Providence Pets</tr>
            <tr className="menuRow">Brown Sports</tr>
            <tr className="menuRow">Event Photos</tr>
            <tr className="menuRow">Urban Structures</tr>
          </table>
        </div>
      </div>

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
