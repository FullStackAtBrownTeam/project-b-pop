import React, { useState } from "react";
import BLogo from "./bpop_full.png";
import "./hamburger.css";
import Burger from "./Burger/Burger.js";
import Menu from "./Menu/Menu.js";

const NavBar = (props) => {
  const [toggleHamburger, setToggleHamburger] = useState(true);
  const [open, setOpen] = useState(false);
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
          {/* <button
            onClick={() => setToggleHamburger(!toggleHamburger)}
            class={
              toggleHamburger
                ? "hamburger hamburger--squeeze"
                : "hamburger hamburger--squeeze is-active"
            }
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button> */}

          <Burger open={open} setOpen={setOpen} />
        </div>
      </div>
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};
export default NavBar;
