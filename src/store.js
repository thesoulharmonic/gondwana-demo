import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import userSlice from "./features/userSlice";
import appApi from "./services/appApi";

// use reduc to persit the store https://www.positronx.io/how-to-integrate-redux-persist-to-react-redux-store/
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

// reducers

const reducer = combineReducers({
  user: userSlice, // add the user slice to the root reducer
  products: productSlice, // add the product slice
  [appApi.reducerPath]: appApi.reducer, // add the appApi
});

const persistConfig = {
  key: "root", // set the key used to store the persisted state
  storage, // set the storage engine
  blackList: [appApi.reducerPath, "products"], // define array
};

// persist our store
const persistedReducer = persistReducer(persistConfig, reducer);

// creating the store

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, appApi.middleware],
});

export default store;
