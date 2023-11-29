import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export function Card({ heading, description, icon, className,duration,delay }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const top = cardRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount
  const fadeInVariants = {
    hidden: { opacity: 0, x: 20 ,scale: 0.1, filter: "blur(20px)" },
    visible:{ opacity: 1, x:0 ,scale: 1, filter: "blur(0px)",transition:  { duration, delay }},
  };
  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeInVariants}
      className={`w-[350px] group rounded-2xl relative overflow-hidden cursor-pointer p-14 py-28 ${className}`}
    >
       <div className='bg-gradient-to-b from-[#4D0AA4] to-[#AC76FE] absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 '></div>
      <div className='relative z-10  flex flex-col items-center justify-center text-center gap-4 '>
        <img src={icon} alt='' className="w-24 h-24" />
        <p className='cardtxt font-semibold text-black  transition-all   duration-500 group-hover:text-white text-2xl tracking-widest	'>
          {heading}
        </p>
        <p className='blueberry  text-[#3d3d3d]	  transition-all  duration-500 group-hover:text-white 		'>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
