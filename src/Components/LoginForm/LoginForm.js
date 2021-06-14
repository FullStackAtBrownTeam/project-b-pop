import React from "react";
import { bool } from "prop-types";
import { StyledLoginForm } from "./LoginForm.styled";

const Menu = ({ loginOpen, setLoginOpen }) => {
  return (
    <StyledLoginForm loginOpen={loginOpen}>
      <div loginOpen={loginOpen} className="loginForm">
        <form>
          <label>Username:</label>
          <input type="text"></input>
          <label>Password:</label>
          <input type="password"></input>
          <button className="loginButton">Log In</button>
          <h3>New to BPOP?</h3>
          <button className="signUpButton">Sign Up</button>
        </form>
      </div>
    </StyledLoginForm>
  );
};
Menu.propTypes = {
  loginOpen: bool.isRequired,
};
export default Menu;
