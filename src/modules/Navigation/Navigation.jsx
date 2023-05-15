import useMatchMedia from '../../hooks/useMatchMedia';
import React from 'react';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../redux/auth/auth-selector';
import Nav from './Nav/Nav';
import UserNavigation from './UserNav/UserNav';
import AuthNavigation from './AuthNav/AuthNav';
import BurgerMenu from './Nav/BurgerMenu';

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
          {isLoggedIn ? <UserNavigation /> : <AuthNavigation />}
        </>
      )}
      {isTablet && (
        <>
          {isLoggedIn ? <UserNavigation /> : <AuthNavigation />}
          <BurgerMenu />
        </>
      )}
      {isMobile && isLoggedIn && <UserNavigation />}
      {isMobile && <BurgerMenu />}
    </>
  );
}

export default Navigation;