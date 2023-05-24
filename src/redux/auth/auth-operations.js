import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import * as api from "../../shared/services/auth";
import axios from "axios";

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
      const result = await api.updUserInfo(data);
      Notify.success("User information successfully changed!");
      return result.data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.responce);
    }
  }
);

// export const getOwnerInfo = createAsyncThunk(
//   "auth/getOwnerInfo",
//   async (id, { rejectWithValue }) => {
//     try {
//       const data = await api.getOwnerInfo(id);
//       console.log(data);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
