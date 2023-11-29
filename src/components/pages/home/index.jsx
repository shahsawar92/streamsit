import React from "react";
import HeroSection from "./hero.jsx";
import Services from "./services.jsx";
import AboutUsSection from "./aboutSec.jsx";
import GoogleMap from "../../common/map.jsx";
import CallToAction from "../../common/cta.jsx";
import Navbar from "../../common/navbar/navbar.jsx";
import Footer from "../../common/footer/footer.jsx";
import PartnerLogosSection from "../../common/partners.jsx";

export default function Index() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <div className="">
        <Services />
      </div>
      <AboutUsSection />
      <PartnerLogosSection />
      <GoogleMap />
      <CallToAction />
      <Footer />
    </>
  );
}
