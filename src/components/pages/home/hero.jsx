import React from "react";
import background from "../../../assets/header-image.png";
import { motion } from "framer-motion";
import { Button } from "../../common/Button/Button";

const HeroSection = () => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {/* Background image with animation */}
      <motion.div
        className="flex justify-between h-screen  mt-10   absolute"
        initial={{ opacity: 0 }} // Initial state (fully transparent)
        animate={{ y: -40, opacity: 1 }} // Scale and opacity animation
        transition={{ duration: 2 }} // Adjust duration
      >
        <img src={background} className="w-screen " />
      </motion.div>

      {/* Content div */}
      <div
        className="flex justify-between h-screen bg-cover py-8 absolute mt-40"
        style={{ zIndex: 1 }} // Ensure this div is stacked on top of the background
      >
        <motion.div
          className="max-w-1/2 text-white p-8 flex flex-col gap-6 "
          animate={{ y: -140, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl font-bold text-[#17bf33] tracking-[.300em]	">
            OUR MISSION
          </h1>
          <h1 className="text-6xl font-bold leading-snug w-2/6 text-[#ab75fe]">
            We Scrutinize Contemporary Tech
          </h1>
          <p className="text-lg w-2/3">
            To provide our customers with cost-effective customized
            technological solutions for a variety of real-world problems in
            hardware, software & firmware.
          </p>
          <Button text="Watch Video" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
