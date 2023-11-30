import React from "react";
import { Card } from "../../common/card";

export default function ServicesCards() {
  return (
    <div className="flex flex-wrap justify-center gap-3 py-8">
      <Card
        heading="HVAC Control & Monitoring"
        className="w-72 h-56 md:w-96 md:h-56 py-28  after:w-96 bg-white  shadow-lg"
        contact={true}
      />
      <Card
        heading="Data Security & Retention"
        className="w-72 h-56 md:w-96 md:h-56 py-28  after:w-96 bg-white  shadow-lg"
        contact={true}
      />
      <Card
        heading="Machine Learning & Analysis"
        className="w-72 h-56 md:w-96 md:h-56 py-28  after:w-96 bg-white  shadow-lg"
        contact={true}
      />

      <Card
        heading="Predictive Maintenance"
        className="w-72 h-56 md:w-96 md:h-56 py-28  after:w-96 bg-white  shadow-lg"
        contact={true}
      />
      <Card
        heading="Generator Control & Monitoring"
        className="w-72 h-56 md:w-96 md:h-56 py-28  after:w-96 bg-white  shadow-lg"
        contact={true}
      />

      <Card
        heading="Battery Monitoring & Managemen"
        className="w-72 h-56 md:w-96 md:h-56 py-28  after:w-96 bg-white  shadow-lg"
        contact={true}
      />

      <Card
        heading="Solar Monitoring & Analysis"
        className="w-72 h-56 md:w-96 md:h-56 py-28  after:w-96 bg-white  shadow-lg"
        contact={true}
      />

      <Card
        heading="Fuel Monitoring & Management"
        className="w-72 h-56 md:w-96 md:h-56 py-28  after:w-96 bg-white  shadow-lg"
        contact={true}
      />
    </div>
  );
}
