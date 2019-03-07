import React from "react";
import Hero from "../components/Globals/Hero";
import Title from "../components/Globals/Title";
import servicesBcg from "../images/servicesBcg.jpeg";

export default function ServicesPage() {
  return (
    <Hero image={servicesBcg}>
      <Title color="white" size="big" title="our services" />
    </Hero>
  );
}
