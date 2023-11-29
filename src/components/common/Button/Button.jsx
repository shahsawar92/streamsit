import React from "react";
import { motion } from "framer-motion";

export const Button = ({ text }) => {
  return (
    <div>
      <motion.button
        className="custom-button text-white py-2 px-8  rounded-full mt-20"
        animate={{ y: -80, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {text}
      </motion.button>
    </div>
  );
};
