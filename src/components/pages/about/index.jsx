import React from "react";
import Navbar from "../../common/navbar/navbar";
import AboutHeroSection from "./AboutHero";
import CallToAction2 from "./Cta1";
import WhoWeAreSection from "./WhoWeAre";
import CallToAction from "../../common/cta";
import Footer from "../../common/footer/footer";

export default function Index() {
  return (
    <>
      <AboutHeroSection />
      <CallToAction2 />
      <WhoWeAreSection />
      <CallToAction />
    </>
  );
}
