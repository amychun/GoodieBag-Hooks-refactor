import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/candies">All Candies List</NavLink>
    </div>
  );
};

export default Navbar;
