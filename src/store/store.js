import { configureStore } from "@reduxjs/toolkit";
import clipReducer from "./clipSlice";
import favoriteReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    clip: clipReducer,
    favorite: favoriteReducer,
  },
});
