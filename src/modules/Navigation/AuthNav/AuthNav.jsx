import React from 'react';
import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';
import { ReactComponent as Paw } from '../../../assets/image/icons/pawprint.svg';

const isAuth = true;

function AuthNav({ handleLinkClick }) {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };
  return (
    <>
      {!isAuth ? null : (
        <div className={css.auth}>
          <Link to="/login" className={css.authButton} onClick={handleClick}>
            <span className={css.auth_text}>Log IN</span>
            <Paw className={css.svg} />
          </Link>
          <Link to="/register" className={css.authButton} onClick={handleClick}>
            <span className={css.auth_text}>Registration</span>
          </Link>
        </div>
      )}
    </>
  );
}

export default AuthNav;
