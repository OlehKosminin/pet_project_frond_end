import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://your-pets-rest-api.onrender.com',
});

export const fetchNoticesByTitle = createAsyncThunk(
  'notices/search',
  async ({ category, searchQuery, page }, thunkAPI) => {
    try {
      const response = await instance.get(`/notices/search/${category}`, {
        params: {
          q: searchQuery,
          page,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/category',
  async (category, thunkAPI) => {
    try {
      const response = await instance.get(`/notices/category/${category}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesById = createAsyncThunk(
  'notices/search',
  async (noticeId, thunkAPI) => {
    try {
      const response = await instance.get(`/notices/search/${noticeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
