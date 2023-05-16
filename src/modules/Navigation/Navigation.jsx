import useMatchMedia from "../../hooks/useMatchMedia";
import React from "react";
import { useSelector } from "react-redux";
import { isUserLogin } from "../../redux/auth/auth-selector";
import Nav from "./Nav/Nav";
import UserNav from "./UserNav/UserNav";
import AuthNav from "./AuthNav/AuthNav";
import BurgerMenu from "./Nav/BurgerMenu";

function Navigation() {
  const { isMobile } = useMatchMedia();
  const { isTablet } = useMatchMedia();
  const { isDesktop } = useMatchMedia();
  const isLoggedIn = useSelector(isUserLogin);

  return (
    <>
      {isDesktop && (
        <>
          <Nav />
          {isLoggedIn ? <UserNav /> : <AuthNav />}
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </>
      )}
      {isTablet && (
        <>
          {isLoggedIn ? <UserNav /> : <AuthNav />}
          {isLoggedIn ? <UserNav /> : <AuthNav />}
          <BurgerMenu />
        </>
      )}
      {isMobile && !isLoggedIn && <UserNav />}
      {isMobile && <BurgerMenu />}
    </>
  );
}

export default Navigation;
