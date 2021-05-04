import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <a
        onClick={() => {
          setOpen(false);
        }}
      >
        <span role="img" aria-label="about us">
          &#10005;
        </span>
      </a>

      <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Favorites
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        My Groups
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        About BPOP
      </a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
