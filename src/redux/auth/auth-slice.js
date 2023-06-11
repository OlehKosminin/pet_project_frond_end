import { createSlice } from "@reduxjs/toolkit";
import { singup, login, current, logout, updUserInfo } from "./auth-operations";

const initialState = {
  user: {},
  token: "",
  loading: false,
  isLogin: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(singup.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(singup.fulfilled, (store, { payload }) => {
        if (!payload) {
          store.loading = false;
          return;
        }
        const { token } = payload.data;
        store.loading = false;
        store.user = payload.data.data;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(singup.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(login.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(login.fulfilled, (store, { payload }) => {
        if (!payload) {
          store.loading = false;
          return;
        }
        const { token } = payload;
        store.loading = false;
        store.user = payload.result;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(login.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(current.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(current.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.user = payload;
        store.isLogin = true;
      })
      .addCase(current.rejected, (store, { payload }) => {
        store.token = "";
        store.loading = false;
        store.error = payload;
      })
      .addCase(logout.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(logout.fulfilled, (store) => {
        store.loading = false;
        store.user = {};
        store.token = "";
        store.isLogin = false;
      })
      .addCase(logout.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(updUserInfo.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(updUserInfo.fulfilled, (store, action) => {
        store.loading = false;
        store.user = action.payload;
      })
      .addCase(updUserInfo.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});
export default authSlice.reducer;
