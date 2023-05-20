import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFriends = createAsyncThunk(
  'friends/getfriends',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/getPartnerInfo');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);