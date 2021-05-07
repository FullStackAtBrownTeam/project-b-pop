// Menu.styled.js
import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  background: white;
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 5;
  box-shadow: ${({ open }) =>
    open ? "0 0 0 10000px rgba(255, 255, 255, 0.5)" : "0 0"};
  //   @media (max-width: ${({ theme }) => theme.mobile}) {
  //     width: 100%;
  //   }
  table {
    height: 45vh;
    overflow: auto;
    display: inline-block;
  }
  td {
    padding: 10px;
    margin: 10px;
  }

  button {
    background: none;
    text-align: right;
    border: 0px;
  }

  a {
    font-size: 18px;
    // text-transform: uppercase;
    padding: 10px;
    // font-weight: bold;
    // letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    // @media (max-width: ${({ theme }) => theme.mobile}) {
    //   font-size: 1.5rem;
    //   text-align: center;
    // }

    &:hover {
      color: gray;
    }
  }
`;

export { default } from "./Menu";
