import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {getCurrent} from "../../shared/services/friends"

export const getFriends = createAsyncThunk(
  'friends/getfriends',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getCurrent();
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);