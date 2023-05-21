import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Loader from "../shared/components/Loader/Loader";

import PublicRoute from "./PublicRoute/PublicRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

import { current } from "../redux/auth/auth-operations";

const Header = lazy(() => import("../modules/Header/Header"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const NotiesPage = lazy(() => import("../pages/NotiesPage/NotiesPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const UserPage = lazy(() => import("../pages/UserPage/UserPage"));
const AddPetPage = lazy(() => import("../pages/AddPetPage/AddPetPage"));
const NewsPage = lazy(() => import("../pages/NewsPage/NewsPage"));
const OurFriends = lazy(() => import("../pages/OurFriendsPage/OurFriendsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const SharedLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/notices/:category" element={<NotiesPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="user" element={<UserPage />} />
          <Route path="add-pet" element={<AddPetPage />} />
        </Route>
        <Route path="news" element={<NewsPage />} />
        <Route path="our-friends" element={<OurFriends />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default SharedLayout;
