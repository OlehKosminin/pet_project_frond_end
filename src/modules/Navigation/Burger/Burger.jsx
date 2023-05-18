import React from 'react';
import { useState } from 'react';
import BurgerSvg from '../../../assets/image/icons/menu-hamburger.svg';
import css from './Burger.module.css';
import BackdropMenu from '../Backdrop/Backdrop';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={css.burger} onClick={handleOpen}>
        <img src={BurgerSvg} alt="Menu" />
      </button>
      {isOpen ? (
        <BackdropMenu isOpen={isOpen} handleClose={handleClose} />
      ) : null}
    </>
  );
}

export default BurgerMenu;
