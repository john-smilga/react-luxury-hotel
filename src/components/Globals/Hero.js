import React from "react";
import styled from "styled-components";
import homeBcg from "../../images/homeBcg.jpeg";
export default function Hero({ image, children }) {
  return (
    <HeroWrapper img={image}>
      <div className="container-fluid">
        <div className="row hero-row align-items-center justify-content-center">
          {children}
        </div>
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.header`
  .hero-row {
    min-height: 100vh;
    /* background: url(${homeBcg}) ; */
   background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), 
   url(${props => props.img})center/cover no-repeat
  }
`;

Hero.defaultProps = {
  image: homeBcg
};
