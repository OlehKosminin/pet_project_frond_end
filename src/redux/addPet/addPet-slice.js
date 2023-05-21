import { createSlice } from "@reduxjs/toolkit";
import { addNoticesPet, addUserPet } from "./addPet-operations";

const addPetInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const addPetSlice = createSlice({
  name: "addPet",
  initialState: addPetInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(addNoticesPet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNoticesPet.fulfilled, (state, { payload }) => {
        state.error = null;
        state.notices.push(payload);
        state.isLoading = false;
      })
      .addCase(addNoticesPet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addUserPet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUserPet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addUserPet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const addPetReducer = addPetSlice.reducer;
