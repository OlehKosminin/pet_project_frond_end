import {createSlice} from "@reduxjs/toolkit";

import {
  addNotices,
  deleteNotice,
  fetchAllNotices,
  fetchFavoriteNotices,
  fetchOwnNotices,
  getSingleNotice,
  myAddFavoriteNotices,
  removeMyFavoriteNotices,
  searchNotices,
} from "./noties-operations";

const noticesInitialState = {
  notices: { result: [], count: 0 },
  oneNotice: null,
  error: null,
  isLoading: true,
};
const handlePending = (state) => {
  state.isLoading = true;
};
const handleReject = (state, action) => {
  state.notices = { result: [], count: 0 };
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
        // console.log("slice payload: ", payload);
        state.isLoading = false;
        state.notices.result = payload.result;
        state.notices.count = payload.resultCount;
        state.error = null;
      })
      .addCase(fetchAllNotices.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(searchNotices.pending, (state) => {
        handlePending(state);
      })
      .addCase(searchNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notices.result = payload.result;
        state.notices.count = payload.resultCount;
        state.error = null;
      })
      .addCase(searchNotices.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(addNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addNotices.rejected, (state, action) => {
        handleReject(state, action);
      })
      // .addCase(addNotices.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(addNotices.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.items.push(payload);
      // })
      // .addCase(addNotices.rejected, (state, action) => {
      //   // handleReject(state, action);
      //   // state.isLoading = false;
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      .addCase(deleteNotice.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteNotice.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(deleteNotice.rejected, (state, { payload }) => {
        handleReject(state, payload);
      })
      .addCase(getSingleNotice.pending, (state) => {
        handlePending(state);
      })
      .addCase(getSingleNotice.fulfilled, (state, { payload }) => {
        console.log("isFulfilled");
        state.isLoading = false;
        state.oneNotice = payload.result;
        // console.log("slice:", state.oneNotice);
        state.error = null;
      })
      .addCase(getSingleNotice.rejected, (state, action) => {
        handleReject(state, action);
      })
      // // додає оголошення
      // .addCase(createNotice.pending, (state) => {
      //   handlePending(state);
      // })
      // .addCase(createNotice.fulfilled, (state, { payload }) => {
      //   state.notices.push(payload);
      //   state.isLoading = false;
      //   state.error = null;
      // })
      // .addCase(createNotice.rejected, (state, { payload }) => {
      //   handleReject(state, payload);
      // })
      // .addCase(getUserNotices.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.own = payload;
      // })
      // .addCase(getUserNotices.rejected, (state, action) => {
      //   handleReject(state, action);
      // })
      .addCase(fetchOwnNotices.pending, (state) => {
        handlePending(state);
      })
      .addCase(fetchOwnNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notices.result = payload.result;
        state.notices.count = payload.resultCount;
        state.error = null;
      })
      .addCase(fetchOwnNotices.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(fetchFavoriteNotices.pending, (state) => {
        handlePending(state);
      })
      .addCase(fetchFavoriteNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notices.result = payload.result;
        state.notices.count = payload.resultCount;
        state.error = null;
      })
      .addCase(fetchFavoriteNotices.rejected, (state, action) => {
        handleReject(state, action);
      })

      .addCase(myAddFavoriteNotices.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(myAddFavoriteNotices.rejected, (state, action) => {
        handleReject(state, action);
      })

      .addCase(removeMyFavoriteNotices.fulfilled, (state, { payload }) => {
        state.loading = false;

        state.error = null;
      })
      .addCase(removeMyFavoriteNotices.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
  reducers: {
    clearNotices(state, { payload }) {
      state.notices = payload;
    },
    changeFavoritesNotices(state, { payload }) {
      state.notices = state.notices.filter((notice) => notice._id !== payload);
    },
  },
});
export const noticesReducer = noticesSlice.reducer;
export const { clearNotices, changeFavoritesNotices } = noticesSlice.actions;
