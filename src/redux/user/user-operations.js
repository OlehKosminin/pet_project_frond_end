import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/services/auth";
import axios from "axios";

axios.defaults.baseURL = "https://yourpet-backend.onrender.com/api";

export const accessToken = {
  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const getCurrentUser = createAsyncThunk(
  "user/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accessToken;
      if (value === null) {
        return rejectWithValue("Unable to fetch user");
      }
      accessToken.set(value);
      const { data } = await axios.get("user/current");

      return data;
    } catch (e) {
      console.log(e.response.data);
      return rejectWithValue(e.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  "user/addFavorite",
  async (id, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accessToken;
      if (value === null) {
        return rejectWithValue("Unable to fetch user");
      }
      accessToken.set(value);
      const { data } = await axios.post(`/user/favorite/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getFavorite = createAsyncThunk(
  "user/getFavorite",
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accessToken;
      if (value === null) {
        return rejectWithValue("Unable to fetch user");
      }
      accessToken.set(value);
      const { data } = await axios.get("/user/favorite");
      return data.user.favorite;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  "user/deleteFavorite",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/user/favorite/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletePets = createAsyncThunk(
  "user/deletePets",
  async (id, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accessToken;
      if (value === null) {
        return rejectWithValue("Unable to patch user");
      }
      accessToken.set(value);
      const { data } = await axios.delete(`/pets/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
