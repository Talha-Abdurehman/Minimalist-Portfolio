import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({ content, link, setOpen }) => {
  return (
    <NavLink
      to={link}
      onClick={setOpen}
      className={({ isActive }) =>
        `${
          isActive
            ? "border-b-2 border-black hover:border-white"
            : "border-none"
        } hover:bg-black hover:text-white transition-all duration-250 ease-in-out p-4 w-screen`
      }
    >
      {content}
    </NavLink>
  );
};

export default NavButton;
