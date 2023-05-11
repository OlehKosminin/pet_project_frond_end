import { createSlice } from "@reduxjs/toolkit";
import { singup, login, current, logout } from "./auth-operations";

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
        const { user, token } = payload.data;
        store.loading = false;
        store.user = user;
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
        store.loading = false;
        store.user = payload.user;
        store.token = payload.token;
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
        const { name, email } = payload;
        store.loading = false;
        store.user.name = name;
        store.user.email = email;
        store.isLogin = true;
      })
      .addCase(current.rejected, (store, { payload }) => {
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
      });
  },
});
export default authSlice.reducer;
