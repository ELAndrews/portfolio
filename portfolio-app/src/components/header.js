import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerContainer">
      <img
        className="signature"
        src="https://files.slack.com/files-pri/T4JUEB3ME-FP311FPK7/4.png"
        alt="signature"
      />
      <div className="navLinks">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/work">WORK</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
    </div>
  );
}
