import { configureStore } from "@reduxjs/toolkit";
import clipReducer from "./clipSlice";

export const store = configureStore({
  reducer: {
    clip: clipReducer,
  },
});
