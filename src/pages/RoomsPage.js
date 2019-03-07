import React from "react";
import Hero from "../components/Globals/Hero";
import Title from "../components/Globals/Title";
import roomsBcg from "../images/roomsBcg.jpeg";
export default function RoomsPage() {
  return (
    <Hero image={roomsBcg}>
      <Title color="white" size="big" title="our rooms" />
    </Hero>
  );
}
