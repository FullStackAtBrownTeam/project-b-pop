import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <button
        onClick={() => {
          setOpen(false);
        }}
      >
        &#10005;
      </button>
      {/* <a
        onClick={() => {
          setOpen(false);
        }}
      >
        <span role="img" aria-label="about us">
          &#10005;
        </span>
      </a> */}
      <h4>My Groups</h4>
      <table>
        <tr>
          <td>&#x1F436;</td>
          <td>
            <a href="/">Providence Pets</a>
          </td>
        </tr>
        <tr>
          <td>&#x1F3C8;</td>
          <td>
            <a href="/">Brown Sports</a>
          </td>
        </tr>
        <tr>
          <td>&#x1F3C8;</td>
          <td>
            <a href="/">Event Photography</a>
          </td>
        </tr>
        <tr>
          <td>&#x1F3C8;</td>
          <td>
            <a href="/">Urban Structures</a>
          </td>
        </tr>
        <tr>
          <td>&#x1F3C8;</td>
          <td>
            <a href="/">Travel Photography</a>
          </td>
        </tr>
        <tr>
          <td>&#x1F3C8;</td>
          <td>
            <a href="/">Fashion</a>
          </td>
        </tr>
        <tr>
          <td>&#x1F3C8;</td>
          <td>
            <a href="/">Landscape Photography</a>
          </td>
        </tr>
        <tr>
          <td>&#x1F3C8;</td>
          <td>
            <a href="/">Fine Art Photography</a>
          </td>
        </tr>
      </table>
      <a href="/">My Favorites</a>
      <a href="/">Profile</a>
      <a href="/">About BPOP</a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
