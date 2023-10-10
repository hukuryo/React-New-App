import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const newFavorite = action.payload;
      state.favorites.push(newFavorite); // state.favorites に追加
    },
    deleteFavorite: (state, action) => {
      const deletingFavorite = action.payload;
      const currentFavorites = state.favorites;
      const filterFavorites = currentFavorites.filter(
        (favorite) => favorite.publishedAt !== deletingFavorite.publishedAt
      );
      state.favorites = filterFavorites;
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
