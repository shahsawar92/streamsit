import React from "react";
import { IoLocationOutline, IoPhonePortrait } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

export function Card({
  heading,
  description,
  icon,
  className,
  duration,
  delay,
  contact,
  ser,
}) {
  const obj = {
    ADDRESS: <IoLocationOutline className="text-green-400 text-6xl -mt-20" />,
    PHONE: <IoPhonePortrait className="text-green-400 text-6xl -mt-20" />,
    WORKING: <CiClock1 className="text-green-400 text-6xl -mt-20" />,
    "EMAIL ADDRESS": <MdEmail className="text-green-400 text-6xl -mt-20" />,
    "HVAC Control & Monitoring": (
      <MdEmail className="text-green-400 text-6xl -mt-20" />
    ),
    "Data Security & Retention": (
      <MdEmail className="text-green-400 text-6xl -mt-20" />
    ),
    "Machine Learning & Analysis": (
      <MdEmail className="text-green-400 text-6xl -mt-20" />
    ),
  };
  return (
    <div
      className={`w-[350px] group rounded-2xl relative overflow-hidden cursor-pointer p-14 py-28 ${className}`}
    >
      <div className="bg-gradient-to-b from-[#4D0AA4] to-[#AC76FE] absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
      <div
        className={
          contact
            ? " flex flex-col justify-center items-center gap-4 z-10 relative "
            : "relative z-10  flex flex-col items-center justify-center text-center gap-4 "
        }
      >
        {contact || ser ? (
          obj[heading]
        ) : (
          <img
            src={icon}
            alt=""
            className={contact ? "w-20 h-20 -mt-20" : "w-24 h-24"}
          />
        )}
        <p className="cardtxt font-semibold text-black  transition-all   duration-500 group-hover:text-white text-2xl tracking-widest	">
          {heading}
        </p>
        <p className="blueberry  text-[#3d3d3d]	  transition-all  duration-500 group-hover:text-white 		">
          {description}
        </p>
      </div>
    </div>
  );
}
