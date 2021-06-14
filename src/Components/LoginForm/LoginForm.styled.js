import styled from "styled-components";

export const StyledLoginForm = styled.nav`
  background: white;
  height: 50%;
  width: 50%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  border-radius: 15px;
  position: fixed;
  left: 25%;
  top: 25%;
  box-shadow: ${({ loginOpen }) =>
    loginOpen ? "0 0 0 10000px rgba(0, 0, 0, 0.3)" : "0 0"};

  input {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
  
  
  }
`;

export { default } from "./LoginForm";
