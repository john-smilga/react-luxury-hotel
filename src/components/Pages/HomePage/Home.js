import React from "react";
import Hero from "../../Globals/Hero";
import BannerTitle from "../../Globals/BannerTitle";
import Services from "./Services";
export default function Home() {
  return (
    <main>
      <Hero>
        <BannerTitle title="welcome to luxury hotel" />
      </Hero>
      <Services />
    </main>
  );
}
