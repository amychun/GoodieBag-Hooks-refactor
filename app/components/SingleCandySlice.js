import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleCandy = createAsyncThunk(
  "/candies/singlecandy",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/candies/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const increaseQuantity = createAsyncThunk(
  "candies/increment",
  async ({ id, quantity }) => {
    try {
      const { data } = await axios.put(`/api/candies/${id}`, { quantity });
      console.log(data, id, quantity);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const singleCandySlice = createSlice({
  name: "singlecandy",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSingleCandy.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(increaseQuantity.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { increment, decrement } = singleCandySlice.actions;
export default singleCandySlice.reducer;
