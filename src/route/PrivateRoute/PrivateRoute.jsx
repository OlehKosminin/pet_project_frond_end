import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { getIsLoggedIn } from "../../redux/auth/auth-selector";

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getIsLoggedIn);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
