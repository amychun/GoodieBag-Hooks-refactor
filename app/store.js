import { configureStore } from "@reduxjs/toolkit";
import candiesReducer from "./components/CandiesSlice";

export const store = configureStore({
  reducer: {
    candies: candiesReducer,
  },
});
