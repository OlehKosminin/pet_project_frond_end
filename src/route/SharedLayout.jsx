import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Header = lazy(() => import("../modules/Header/Header"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const NotiesPage = lazy(() => import("../pages/NotiesPage/NotiesPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const UserPage = lazy(() => import("../pages/UserPage/UserPage"));
const AddPetPage = lazy(() => import("../pages/AddPetPage/AddPetPage"));
const SharedLayout = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/noties/:categori" element={<NotiesPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="add-page" element={<AddPetPage />} />
        <Route path="*" element={<div>Not Found page</div>} />
      </Routes>
    </Suspense>
  );
};

export default SharedLayout;
