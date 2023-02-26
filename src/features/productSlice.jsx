import { createSlice } from "@reduxjs/toolkit";

// add appApi
import appApi from "../services/appApi";

const initialState = [];

export const productSlice = createSlice({
  name: "products",
  initialState, // set the initial state of the products
  reducers: {
    updateProducts: (_, action) => {
      return action.payload;
    }, // a reducer function to update the products state
  },
  extraReducers: (builder) => {
    // add extra reducers for specific actions
    builder.addMatcher(
      appApi.endpoints.createProduct.matchFulfilled,
      (_, { payload }) => payload
    );
    builder.addMatcher(
      appApi.endpoints.updateProduct.matchFulfilled,
      (_, { payload }) => payload
    );
    builder.addMatcher(
      appApi.endpoints.deleteProduct.matchFulfilled,
      (_, { payload }) => payload
    );
  },
});

export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;
