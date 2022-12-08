import React from "react";
import Candies from "./components/Candies";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";

const Root = () => {
  // const candies = useSelector((state) => state.candies);
  // console.log(candies);

  return (
    <div>
      <Main />
      <Navbar />
      <Routes>
        <Route path="/"></Route>
        <Route path="/candies" element={<Candies />}></Route>
      </Routes>
    </div>
  );
};

export default Root;
