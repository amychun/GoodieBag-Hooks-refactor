import { configureStore } from "@reduxjs/toolkit";
import candiesReducer from "./components/CandiesSlice";
import singleCandyReducer from "./components/SingleCandySlice";

export const store = configureStore({
  reducer: {
    candies: candiesReducer,
    singlecandy: singleCandyReducer,
  },
});
