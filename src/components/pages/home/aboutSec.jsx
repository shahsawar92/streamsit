import aboutImage from "../../../assets/sectionimg1.png"; // Replace with your image path
import { Button } from "../../common/Button/Button";
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  return (
    <div className="flex items-center justify-between  py-12 container mx-auto gap-20">
      <div className="w-1/2 pr-8   ">
      <motion.img
        src={aboutImage}
        alt="About Us"
        className="rounded-lg shadow-lg border"
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      />
      </div>
      <div className="w-1/2">
        <h2 className="text-green-500 text-lg font-semibold mb-2 tracking-[15px]">ABOUT US</h2>
        <h1 className="text-3xl font-bold mb-4">
          Our Company Is Here To Help You
        </h1>
        <p className="text-lg mb-4">
          Streams IT Solutions (Private) Limited, is an innovative and
          value-driven company in IIoT & Embedded Systems. We are an
          industry-standard solution provider ranging from Energy consumption,
          Generator, Fuel, Solar, and Battery bank Monitoring to HVAC control
          solutions.
        </p>
        <Button text=" Learn More" />
      </div>
    </div>
  );
};

export default AboutUsSection;
