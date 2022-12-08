import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCandies = createAsyncThunk("/candies", async () => {
  try {
    const { data } = await axios.get("/api/candies");
    return data;
  } catch (err) {
    console.log(err);
  }
});

const candiesSlice = createSlice({
  name: "candies",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCandies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default candiesSlice.reducer;
