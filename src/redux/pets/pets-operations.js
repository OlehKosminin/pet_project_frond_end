import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/pets";

export const singup = createAsyncThunk(
  "noties/search",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.singup(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
