import React, { useState, useEffect } from "react";
import { fetchCandies } from "./CandiesSlice";
import { useSelector, useDispatch } from "react-redux";
import SingleCandy from "./SingleCandy";
import { NavLink } from "react-router-dom";

const Candies = () => {
  const dispatch = useDispatch();
  const candies = useSelector((state) => state.candies);

  useEffect(() => {
    dispatch(fetchCandies());
  }, []);

  return (
    <div>
      <ul>
        {candies && candies.length
          ? candies.map((candy, idx) => {
              return (
                <li key={idx}>
                  <NavLink to={`/candies/${candy.id}`} key={idx}>
                    {/* <img src={candy.imageUrl} /> */}
                    <p>{candy.name}</p>
                  </NavLink>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Candies;
