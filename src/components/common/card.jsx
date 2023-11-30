import React from "react"

export function Card({
  heading,
  description,
  icon,
  className,
  duration,
  delay,
}) {
  return (
    <div
      className={`w-[350px] group rounded-2xl relative overflow-hidden cursor-pointer p-14 py-28 ${className}`}
    >
      <div className="bg-gradient-to-b from-[#4D0AA4] to-[#AC76FE] absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
      <div className="relative z-10  flex flex-col items-center justify-center text-center gap-4 ">
        <img src={icon} alt="" className="w-24 h-24" />
        <p className="cardtxt font-semibold text-black  transition-all   duration-500 group-hover:text-white text-2xl tracking-widest	">
          {heading}
        </p>
        <p className="blueberry  text-[#3d3d3d]	  transition-all  duration-500 group-hover:text-white 		">
          {description}
        </p>
      </div>
    </div>
  )
}
