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

const MainFeed = (props) => {
  return (
    <div>
      <div>
        <div className="contentColumn">
          <div className="featuredRow">
            <h1>Featured Gallery</h1>
          </div>
          <div className="postsColumn">
            <h3>Your Feed</h3>
          </div>
        </div>
        <div className="menuColumn">
          <table>
            <thead>
              <h3 className="menuHead">Easy Access</h3>
            </thead>
            <tr>
              <td className="menuRow">Providence Pets</td>
            </tr>
            <tr>
              <td className="menuRow">Brown Sports</td>
            </tr>
            <tr>
              <td className="menuRow">Event Photos</td>
            </tr>
            <tr>
              <td className="menuRow">Urban Structures</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default MainFeed;
