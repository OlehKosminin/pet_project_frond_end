import { createAsyncThunk } from '@reduxjs/toolkit';

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