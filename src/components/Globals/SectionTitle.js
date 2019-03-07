import React from "react";
import styled from "styled-components";
export default function SectionTitle({ title, color }) {
  return (
    <TitleWrapper white={color}>
      <div className="row">
        <div className="col text-center mb-5">
          <h2 className="text-uppercase">{title}</h2>
          <div className="title-underline" />
        </div>
      </div>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  /* color:var(--primaryColor); */
  color: ${props => (props.white ? "#fff" : "var(--primaryBlack)")};
  .title-underline {
    width: 3rem;
    height: 0.25rem;
    margin: 0 auto;
    background: var(--primaryColor);
  }
  h2 {
    letter-spacing: var(--letterSpacing);
  }
`;
