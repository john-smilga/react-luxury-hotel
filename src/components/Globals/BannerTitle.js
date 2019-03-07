import React from "react";
import styled from "styled-components";
export default function BannerTitle({ title, subtitle }) {
  return (
    <TitleWrapper className="col text-center">
      <h1 className="text-capitalize display-4 text-white mb-3">{title}</h1>
      <div className="title-underline mb-4" />
      <h6 className="text-white text-capitalize">
        stay in luxury room at just 99$
      </h6>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  letter-spacing: var(--letterSpacing);
  .title-underline {
    width: 40%;
    margin: 0 auto;
    height: 4px;
    background: var(--primaryColor);
  }
`;
