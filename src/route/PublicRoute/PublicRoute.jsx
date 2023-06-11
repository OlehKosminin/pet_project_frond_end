import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { getIsLoggedIn } from "../../redux/auth/auth-selector";

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getIsLoggedIn);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (isLogin) {
    return <Navigate to="/user" />;
  }

  return <Outlet />;
};

export default PublicRoute;
