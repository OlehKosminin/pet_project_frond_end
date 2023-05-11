export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
export const isUserLogin = ({ auth }) => auth.isLogin;
