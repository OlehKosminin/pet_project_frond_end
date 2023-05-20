import { createAsyncThunk } from "@reduxjs/toolkit";
// import instance from "../../shared/services/auth";

import * as api from "../../shared/services/pets";

export const getPets = createAsyncThunk(
  "pets/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getAll();
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const addPet = createAsyncThunk(
  "pets/add",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addPet(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const deletePet = createAsyncThunk(
  "pets/delete",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.deletePet(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
