import { useSelector } from "react-redux";
import {
  getUser,
  getIsLoggedIn,
  getRefreshToken,
} from "../redux/auth/auth-selector";

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getRefreshToken);
  const user = useSelector(getUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
