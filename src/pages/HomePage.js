import React from "react";
import Hero from "../components/Globals/Hero";
import BannerTitle from "../components/Globals/BannerTitle";
import Services from "../components/HomePage/Services";
export default function Home() {
  return (
    <main>
      <Hero>
        <BannerTitle />
      </Hero>
      <Services />
    </main>
  );
}
