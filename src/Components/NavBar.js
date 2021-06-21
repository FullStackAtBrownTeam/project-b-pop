import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BLogo from "./bpop_full.png";
import "./hamburger.css";
import Burger from "./Burger/Burger.js";
import Menu from "./Menu/Menu.js";
import LoginForm from "./LoginForm/LoginForm";

const NavBar = (props) => {
  const [toggleHamburger, setToggleHamburger] = useState(true);
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  let history = useHistory();
  // const navigate = useNavigate();
  const routeChange = () => {
    history.push("/favorites");
  };
  return (
    <div>
      <div class="topnav">
        <div class="navLeft">
          <a href="/">
            <img className="logoIcon" src={BLogo} alt="Logo" href="/" />
          </a>
          <input
            className="searchBar"
            type="text"
            placeholder="&#x1F50D; Search.."
          />
        </div>
        <div className="navRight">
          <button
            className="navButtons"
            onClick={() => setLoginOpen(!loginOpen)}
          >
            Log in/Join
          </button>
          <button className="navButtons" onClick={routeChange}>
            Post
          </button>
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
      {loginOpen && (
        <LoginForm loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
      )}
    </div>
  );
};
export default NavBar;
