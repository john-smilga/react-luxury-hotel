import React from "react";
import Hero from "../components/Globals/Hero";
import Title from "../components/Globals/Title";
import aboutBcg from "../images/aboutBcg.jpeg";
export default function AboutPage() {
  return (
    <Hero image={aboutBcg}>
      <Title color="white" size="big" title="about us" />
    </Hero>
  );
}
