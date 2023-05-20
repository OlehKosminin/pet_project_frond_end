import { createSlice } from "@reduxjs/toolkit";
import {
  // addNotices,
  // deleteNotice,
  // getNewNotice,
  fetchAllNotices,
  // getNoticeByCategory,
  // getNoticesByQwery,
  // getSingleNotice,
  // createNotice,
  // getUserNotices,
} from "./noties-operations";

const noticesInitialState = {
  items: [],
  // user: {},
  // pets: [],
  // oneNotice: null,
  // favorite: [],
  // own: [],
  error: null,
  isLoading: false,
};
const handlePending = (state) => {
  state.isLoading = true;
};
const handleReject = (state, action) => {
  state.items = [];
  state.isLoading = false;
  state.error = action.payload;
};
const noticesSlice = createSlice({
  name: "notices",
  initialState: noticesInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNotices.pending, (state) => {
        handlePending(state);
      })
      .addCase(fetchAllNotices.fulfilled, (state, { payload }) => {
        console.log(payload, "payload");
        state.isLoading = false;
        state.items = payload;
        state.error = null;
      })
      .addCase(fetchAllNotices.rejected, (state, action) => {
        handleReject(state, action);
      })
  //     .addCase(getSingleNotice.fulfilled, (state, { payload }) => {
  //       state.oneNotice = payload;
  //       state.isLoading = false;
  //       state.error = null;
  //     })
  //     .addCase(getSingleNotice.rejected, (state, action) => {
  //       handleReject(state, action);
  //     })
  //     .addCase(getNewNotice.fulfilled, (state, { payload }) => {
  //       state.notices.push(payload);
  //       state.isLoading = false;
  //     })
  //     .addCase(getNewNotice.rejected, (state, action) => {
  //       handleReject(state, action);
  //     })
  //     .addCase(addNotices.fulfilled, (state, { payload }) => {
  //       state.notices.push(payload);
  //       state.isLoading = false;
  //     })
  //     .addCase(addNotices.rejected, (state, action) => {
  //       handleReject(state, action);
  //     })
  //     .addCase(deleteNotice.fulfilled, (state, { payload }) => {
  //       state.notices = state.notices.filter(({ _id }) => _id !== payload);
  //       state.isLoading = false;
  //     })
  //     .addCase(deleteNotice.rejected, (state, { payload }) => {
  //       handleReject(state, payload);
  //     })
  //     // додає оголошення
  //     .addCase(createNotice.pending, (state) => {
  //       handlePending(state);
  //     })
  //     .addCase(createNotice.fulfilled, (state, { payload }) => {
  //       state.notices.push(payload);
  //       state.isLoading = false;
  //       state.error = null;
  //     })
  //     .addCase(createNotice.rejected, (state, { payload }) => {
  //       handleReject(state, payload);
  //     })
  //     .addCase(getUserNotices.fulfilled, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.own = payload;
  //     })
  //     .addCase(getUserNotices.rejected, (state, action) => {
  //       handleReject(state, action);
  //     })
  //     .addCase(getNoticesByQwery.pending, (state) => {
  //       handlePending(state);
  //     })
  //     .addCase(getNoticesByQwery.fulfilled, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.notices = payload;
  //       state.error = null;
  //     })
  //     .addCase(getNoticesByQwery.rejected, (state, action) => {
  //       handleReject(state, action);
  //     });
  // // },
  // reducers: {
  //   clearNotices(state, { payload }) {
  //     state.notices = payload;
  //   },
  //   changeFavoritesNotices(state, { payload }) {
  //     state.notices = state.notices.filter((notice) => notice._id !== payload);
  //   },
  },
});
export const noticesReducer = noticesSlice.reducer;
export const { clearNotices, changeFavoritesNotices } = noticesSlice.actions;
