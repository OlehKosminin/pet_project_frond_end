import { createSlice } from "@reduxjs/toolkit";
import {} from "./pets-operations";

const initialState = {};

const petsSlice = createSlice({
  name: "noties",
  initialState,
  extraReducers: (builder) => {},
});
export default petsSlice.reducer;
