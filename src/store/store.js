import { configureStore } from "@reduxjs/toolkit";
import clipReducer from "./clipSlice";
import favoriteReducer from "./favoriteSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    clip: clipReducer,
    favorite: favoriteReducer,
    user: userReducer,
  },
});
