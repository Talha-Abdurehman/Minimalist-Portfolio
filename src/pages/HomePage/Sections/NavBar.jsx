import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import NavButton from "../Components/NavButton";
import NavMenu from "../Components/NavMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!true);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between px-2 sm:py-2">
        {/* Desktop Menu */}
        <div className="max-sm:hidden sm:text-2xl">LOGO</div>
        <div className="max-sm:hidden">
          <NavMenu></NavMenu>
        </div>

        {isOpen ? (
          <div className="flex flex-col items-center w-full h-screen sm:hidden">
            <NavMenu />
            <NavButton content={"X"} link={"/contact"} setOpen={handleIsOpen} />
          </div>
        ) : (
          <div className="flex justify-between content-center w-screen sm:hidden">
            <h1>LOGO</h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-5 h-10 flex flex-col justify-between items-center group sm:hidden"
            >
              <span
                className={`w-5 h-1 bg-black rounded transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-1 bg-black rounded transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-1 bg-black rounded transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        )}

        {/* Desktop Menu */}
      </div>
    </div>
  );
};

export default NavBar;
