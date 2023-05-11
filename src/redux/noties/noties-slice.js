import { createSlice } from "@reduxjs/toolkit";
import {} from "./noties-operations";

const initialState = {};

const notiesSlice = createSlice({
  name: "noties",
  initialState,
  extraReducers: (builder) => {},
});
export default notiesSlice.reducer;
