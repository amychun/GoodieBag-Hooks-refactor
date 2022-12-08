import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/candies">Candies</NavLink>
    </div>
  );
};

export default Navbar;
