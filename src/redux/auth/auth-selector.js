export const getAccessToken = (state) => state.auth.token;

export const getIsLoggedIn = (state) => state.auth;
export const getLoading = (state) => state.auth.loading;
export const getError = (state) => state.auth.error;

export const getName = (state) => state.auth.user.name;
export const getUser = (state) => state.auth.user;
export const getUserLoading = (state) => state.auth.loading;
