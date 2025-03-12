import React from "react";
import NavButton from "./NavButton";

const NavMenu = () => {
  return (
    <>
      <NavButton content={"HOME"} link={"/"} />
      <NavButton content={"WORK"} link={"/work"} />
      <NavButton content={"ABOUT"} link={"/about"} />
      <NavButton content={"CONTACT"} link={"/contact"} />
    </>
  );
};

export default NavMenu;
