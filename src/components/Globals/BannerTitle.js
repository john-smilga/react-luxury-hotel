import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function BannerTitle() {
  return (
    <TitleWrapper className="col text-center">
      <h1 className="text-capitalize display-4 text-white mb-3">
        luxury hotel
      </h1>
      <div className="title-underline mb-4" />
      <h4 className="text-white">Rooms Starting at $99</h4>
      <Link to="/rooms" className="btn-custom mt-4">
        explore rooms
      </Link>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  letter-spacing: var(--letterSpacing);
  .title-underline {
    width: 30%;
    margin: 0 auto;
    height: 4px;
    background: var(--primaryColor);
  }
`;
