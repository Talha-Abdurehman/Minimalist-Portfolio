import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import NavButton from "./NavButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!true);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between px-2">
        {isOpen ? (
          <div className="flex flex-col items-center w-full h-screen">
            <NavButton content={"HOME"} link={"/"} />
            <NavButton content={"WORK"} link={"/work"} />
            <NavButton content={"ABOUT"} link={"/about"} />
            <NavButton content={"CONTACT"} link={"/contact"} />
            <NavButton content={"X"} link={"/contact"} setOpen={handleIsOpen} />
          </div>
        ) : (
          <div className="flex justify-between content-center w-screen">
            <h1>LOGO</h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col justify-between items-center group"
            >
              <span
                className={`w-8 h-1 bg-black rounded transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-8 h-1 bg-black rounded transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-8 h-1 bg-black rounded transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
