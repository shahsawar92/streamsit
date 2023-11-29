import React from "react";
import { Card } from "../../common/card";
import img from "../../../assets/logo1.png"; // Replace with your image path

export default function Services() {
  return (
    <div className="flex flex-wrap justify-center container mx-auto px-auto py-20 gap-4 ">
     <Card
        heading="Monitoring"
        description="Completely customized solution to provide real-time insights of all the connected hardware on remote sites anywhere & anytime with ease."
        className="bg-blue-300"
        icon={img}
        duration={.5}
        delay={0} // Set the delay for this card
      />
      <Card
        heading="Monitoring"
        description="Completely customized solution to provide real-time insights of all the connected hardware on remote sites anywhere & anytime with ease."
        className="bg-blue-300"
        icon={img}
        duration={.5}
        delay={0.3} // Set the delay for this card
      />
      <Card
        heading="Monitoring"
        description="Completely customized solution to provide real-time insights of all the connected hardware on remote sites anywhere & anytime with ease."
        className="bg-blue-300"
        icon={img}
        duration={.5}
        delay={.6} // Set the delay for this card
      />
      <Card
        heading="Monitoring"
        description="Completely customized solution to provide real-time insights of all the connected hardware on remote sites anywhere & anytime with ease."
        className="bg-blue-300"
        icon={img}
        duration={.5}
        delay={.9} // Set the delay for this card
      />
    </div>
  );
}
