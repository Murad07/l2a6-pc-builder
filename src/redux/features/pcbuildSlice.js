import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const pcbuildSlice = createSlice({
  name: "pcbuild",
  initialState,
  reducers: {
    addToPcBuild: (state, action) => {
      state.products.push({ ...action.payload });
    },
    removeFromPcBuild: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { addToPcBuild, removeFromPcBuild } = pcbuildSlice.actions;

export default pcbuildSlice.reducer;
