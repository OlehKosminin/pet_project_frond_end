import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  addToFavorites,
  getFavorite,
  deleteFromFavorite,
  deletePets,
} from "./user-operations";

const userInitialState = {
  user: {},
  userName: "",
  pets: null,
  image: "",
  notices: [],
  favorite: [],
  error: null,
  isLoading: false,
};

function UserFulfilled(state, { payload }) {
  state.user = payload;
  state.image = payload.image;
  state.userName = payload.name;
  state.pets = payload.pets;
  state.isLoading = false;
  state.error = null;
}

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    deletePet: (state, { payload }) => {
      state.user.user.pets = payload;
      state.user.pets = payload;
      // state.startDate = payload;
    },
    deleteFavoriteObj: (state, { payload }) => {
      state.favorite = state.favorite.filter((item) => item._id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, UserFulfilled)
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addToFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // state.favorite.push(payload);
        state.favorite = payload.user.favorite;
        state.error = null;
      })
      .addCase(addToFavorites.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload.message;
      })
      .addCase(getFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorite = payload;
      })
      .addCase(getFavorite.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (Array.isArray(state.favorite)) {
          state.favorite = state.favorite.filter((id) => id !== payload.id);
        }
      })
      .addCase(deleteFromFavorite.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deletePets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePets.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deletePets.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const userReducer = userSlice.reducer;
export const { deletePet, deleteFavoriteObj } = userSlice.actions;
