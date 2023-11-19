import { combineReducers, configureStore } from "@reduxjs/toolkit";
import clipReducer from "./clipSlice";
import favoriteReducer from "./favoriteSlice";
import userReducer from "./userSlice";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  clip: clipReducer,
  favorite: favoriteReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
