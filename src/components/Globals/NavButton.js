import React from "react";
import styled from "styled-components";
export default function NavButton() {
  return (
    <NavWrapper onClick={() => console.log("hello")}>
      <i className="fas fa-bars" />
    </NavWrapper>
  );
}

const NavWrapper = styled.span`
  font-size: 2rem;
  color: var(--primaryColor);
  position: fixed;
  top: 2%;
  right: 4%;
  z-index: 1;
  cursor: pointer;
`;
