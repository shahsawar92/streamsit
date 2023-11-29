import * as React from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { MdPhoneEnabled } from "react-icons/md";

import streamitlogo from "../../../assets/streamitlogo.png";
import { useState } from "react";

function Navbar() {
  const menuArray = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];
  const [active, setActive] = useState("Home");
  return (
    <div className="border flex  justify-between px-8 items-center ">
      <div>
        <img src={streamitlogo} />
      </div>
      <div className="flex gap-12 text-2xl self-center">
        {menuArray?.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={
              active === item.title ? "text-[#646cff]" : "text-[#93c5fd]"
            }
          >
            <p onClick={(e) => setActive(item?.title)}>{item.title}</p>
            {/* {active === item.title && (
              <p>
                <GoDotFill />
              </p>
            )} */}
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 font-bold ">
        <p>Call Us: +92 345 9394040</p>
        <p className="text-[#646cff]">
          <MdPhoneEnabled />
        </p>
      </div>
    </div>
  );
}
export default Navbar;
