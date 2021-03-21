import React, { useState } from "react";
import BLogo from "./bpop_full.png";
import './hamburger.css';

const NavBar = (props) => {
  const [toggleHamburger, setToggleHamburger] = useState(true);
  return (
    <div>
      <div class="topnav">
        <div class="navLeft">
          <a href="/">
            <img className="logoIcon" src={BLogo} alt="Logo" href="/" />
          </a>
          <input className="searchBar" type="text" placeholder="Search.." />
        </div>
        <div className="navRight">
          <button className="navButtons">Log in/Join</button>
          <button className="navButtons">Post</button>
          <button onClick={() => setToggleHamburger(!toggleHamburger)}
            class={toggleHamburger ? "hamburger hamburger--squeeze" : "hamburger hamburger--squeeze is-active"} type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-nav">
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
                <a class="nav-link" href="/groups">
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
        </nav> */}


    </div>
  );
};
export default NavBar;
