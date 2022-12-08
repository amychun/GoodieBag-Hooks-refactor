import React, { useState, useEffect } from "react";
import { fetchCandies } from "./CandiesSlice";
import { useSelector, useDispatch } from "react-redux";
import { SingleCandy } from "./SingleCandy";

const candies = () => {
  const candies = useSelector((state) => state.candies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCandies());
  }, []);

  //name, description, quantity, imageUrl
  return (
    <div>
      <ul>
        {candies && candies.length
          ? candies.map((candy, idx) => {
              return (
                <div key={candy.id}>
                  <li>
                    <img src={candy.imageUrl} />
                    <h2>Candy {candy.name}</h2>
                    <p>Quantity: {candy.quantity}</p>
                    <p>{candy.description}</p>
                  </li>
                </div>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default candies;
