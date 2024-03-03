import { combineReducers } from "redux";
import { fetchImagesReducer } from "./reducers/fetchImagesReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  fetchImagesData: fetchImagesReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})