import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/auth";

export const singup = createAsyncThunk(
  "auth/singup",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.singup(data);
      console.log("result: ", result);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const current = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ responce }) {
      return rejectWithValue(responce);
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

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
export const updUserInfo = createAsyncThunk(
  "auth/user-upd",
  async (data, { rejectWithValue }) => {
    try {
      // const formData = new FormData();
      // formData.append("image", image);
      // const header = {
      //   headers: {
      //     Accept: "application/json",
      //     Authorization: `Bearer ${token}`,
      //     "Content-Type": "multipart/form-data",
      //   },
      // };
      const result = await api.updUserInfo(data);
      console.log("data: ", data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
