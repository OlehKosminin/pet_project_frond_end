import { createSlice } from "@reduxjs/toolkit";
import { getFriends } from "./friends-operations";

const friendsInitialState = {
  friends: [],
  isLoaded: false,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState: friendsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFriends.pending, (state, action) => {
        state.isLoaded = true; //false
      })
      .addCase(getFriends.fulfilled, (state, action) => {
        // console.log("action: ", action.payload);
        state.friends = action.payload;
        state.isLoaded = false; //true
      })
      .addCase(getFriends.rejected, (state, action) => {
        state.isLoaded = false;
      });
  },
});

export const friendsReducer = friendsSlice.reducer;
