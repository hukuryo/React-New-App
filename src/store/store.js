import { configureStore } from "@reduxjs/toolkit";
import clipReducer from "../store/slice";

export const store = configureStore({
  reducer: {
    clip: clipReducer,
  },
});
