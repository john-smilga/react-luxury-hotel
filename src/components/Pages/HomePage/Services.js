import React from "react";
import styled from "styled-components";
import SectionTitle from "../../Globals/SectionTitle";
export default function Services() {
  return (
    <ServicesWrapper className="py-5">
      <div className="container">
        {/* section title */}
        <SectionTitle color={"white"} title={"services"} />
        {/* main content */}
        <div className="row" />
      </div>
    </ServicesWrapper>
  );
}

const ServicesWrapper = styled.section`
  background: var(--primaryBlack);
`;
