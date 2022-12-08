import React, { useState, useEffect, dispatch } from "react";
import {
  fetchSingleCandy,
  increment,
  increaseQuantity,
} from "./SingleCandySlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const SingleCandy = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleCandy = useSelector((state) => state.singlecandy);
  const singleCandyQuantity = useSelector(
    (state) => state.singlecandy.quantity
  );

  const [qauntity, setQuantity] = useState(singleCandyQuantity);

  console.log(qauntity);

  const handleIncrement = (e) => {
    e.preventDefault();
    setQuantity((prev) => prev + 1);
  };

  const handelDecrement = (e) => {
    e.preventDefault();
    setQuantity((prev) => prev - 1);
    // dispatch(increaseQuantity({ singleCandy, singleCandyQuantity }));
  };

  useEffect(() => {
    dispatch(fetchSingleCandy(id));
  }, []);

  // useEffect(() => {
  //   dispatch(increaseQuantity(singleCandyQuantity));
  // }, [singleCandyQuantity]);

  return (
    <div>
      <div key={singleCandy.id}>
        <img src={singleCandy.imageUrl} />
        <h2>Candy {singleCandy.name}</h2>
        <button onClick={(e) => handelDecrement(e)}>-</button>
        <button onClick={(e) => handleIncrement(e)}>+</button>
        <p placeholder={singleCandy.quantity}>Quantity: {qauntity}</p>
        <p>{singleCandy.description}</p>
      </div>
    </div>
  );
};

export default SingleCandy;
