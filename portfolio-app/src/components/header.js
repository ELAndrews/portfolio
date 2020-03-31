import React from "react";
import { NavLink } from "react-router-dom";
import signature from "../assets/images/signature.png"

export default function Header() {
  return (
    <div className="headerContainer">
      <img
        className="signature"
        src={signature}
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
