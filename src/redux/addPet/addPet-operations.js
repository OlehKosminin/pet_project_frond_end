import { createAsyncThunk } from "@reduxjs/toolkit";
// import instance from "../../shared/services/auth";

import * as api from "../../shared/services/addPet";

export const addNoticesPet = createAsyncThunk(
  "addPet/notices-pet",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addNoticesPet(data);

      return result.data;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const addUserPet = createAsyncThunk(
  "addPet/my-pet",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addUserPet(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
