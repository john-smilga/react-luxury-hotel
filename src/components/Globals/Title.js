import React from "react";
import styled from "styled-components";
export default function SectionTitle({ title, color, size }) {
  return (
    <TitleWrapper
      white={color}
      big={size}
      className="col text-center mb-5 letter-spacing"
    >
      <h2 className="text-uppercase">{title}</h2>
      <div className="title-underline" />
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  /* color:var(--primaryColor); */
  color: ${props => (props.white ? "#fff" : "var(--primaryBlack)")};
  h2 {
    font-size: ${props => (props.big ? "3.5rem" : "2rem")};
  }
  .title-underline {
    width: 5rem;
    height: 0.25rem;
    margin: 0 auto;
    background: var(--primaryColor);
  }
`;
