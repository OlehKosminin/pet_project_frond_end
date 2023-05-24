import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import * as api from "../../shared/services/pets";

export const getPets = createAsyncThunk(
  "pets/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getAll();
      return result;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.responce);
    }
  }
);

export const addPet = createAsyncThunk(
  "pets/add",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addPet(data);
      Notify.success("Your pet successfully added!");
      return result.data;
    } catch (error) {
      return rejectWithValue(error.responce);
    }
  }
);

export const deletePet = createAsyncThunk(
  "pets/delete",
  async (data, { rejectWithValue }) => {
    try {
      await api.deletePet(data);
      const result = await api.getAll();
      Notify.success("Your pet deleted!");
      return result;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.responce);
    }
  }
);
