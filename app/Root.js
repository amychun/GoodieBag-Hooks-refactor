import React from "react";
import Candies from "./components/Candies";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import Navbar from "./components/Navbar";

const Root = () => {
  // const candies = useSelector((state) => state.candies);
  // console.log(candies);

  return (
    <div>
      {/* <NavLink to={`/candies`} key={`All Candies: ${candies.id}`}>
        Goodie Bag
      </NavLink> */}
      {/* <Navbar /> */}
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
      <Candies />
    </div>
  );
};

export default Root;
