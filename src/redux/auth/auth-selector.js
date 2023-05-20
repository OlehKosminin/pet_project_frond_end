export const getAccessToken = (state) => state.auth.token;

export const getIsLoggedIn = (state) => state.auth;

export const getName = (state) => state.auth.user.name;
export const getUser = (state) => state.auth.user;
