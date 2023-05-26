import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import * as api from "../../shared/services/auth";
import Notiflix from "notiflix";

export const singup = createAsyncThunk(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const result = await api.singup(data);

      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error);

      return Notiflix.Notify.failure(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const result = await api.login(data);

    return result;
  } catch (error) {
    thunkAPI.rejectWithValue(error);

    return Notiflix.Notify.failure("Email and/or password is wrong");
  }
});

export const current = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const data = await api.logout();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updUserInfo = createAsyncThunk(
  "auth/user-upd",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.updUserInfo(data);
      Notify.success("User information successfully changed!");
      return result.data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.responce);
    }
  }
);
