import React from "react";
import styled from "styled-components";
import { FaAlignLeft } from "react-icons/fa";
export default function NavButton({ toggleNavbar }) {
  return (
    <NavWrapper onClick={toggleNavbar}>
      <FaAlignLeft />
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
