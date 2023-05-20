import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import scss from './Header.module.scss';

function Header() {
  return (
    <header className={scss.header}>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
