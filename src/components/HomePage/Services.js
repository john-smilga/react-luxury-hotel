import React from "react";
import styled from "styled-components";
import Title from "../Globals/Title";
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <ServicesWrapper className="py-5">
      <div className="container">
        {/* section title */}
        <div className="row" />
        <Title color={"white"} title={"services"} />
        {/* main content */}
        <div className="row" />
      </div>
      {/* link */}
      <div className="row">
        <div className="col text-center">
          <Link to="/services" className="btn-custom">
            services
          </Link>
        </div>
      </div>
    </ServicesWrapper>
  );
}

const ServicesWrapper = styled.section`
  background: var(--primaryBlack);
`;
