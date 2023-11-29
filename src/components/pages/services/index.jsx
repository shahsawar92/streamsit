import React from "react";
import ServicesHero from "./ServicesHero";
import Navbar from "../../common/navbar/navbar";
import ServicesCards from "./servicesCards";
import ImageTextSection from "../../common/Imagewithtext";
import ScreenShot1 from "../../../assets/Screenshot_1.png";
import ScreenShot3 from "../../../assets/Screenshot_3.png";
import PartnerLogosSection from "../../common/partners";
import CallToAction from "../../common/cta";
import Footer from "../../common/footer/footer";
export default function Index() {
  return (
    <>
      <ServicesHero />
      <ServicesCards />
      <ImageTextSection
        image={ScreenShot1}
        title="Heading"
        subtitle="Subheading"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="/"
        className="md:flex-row-reverse "
      />
      <ImageTextSection
        image={ScreenShot3}
        title="Heading"
        subtitle="Subheading"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="/"
        className="md:flex-row-reverse"
      />
      <PartnerLogosSection />
      <CallToAction />
      <Footer />
    </>
  );
}
