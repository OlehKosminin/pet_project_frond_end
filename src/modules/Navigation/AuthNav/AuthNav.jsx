import React from 'react';
import { Link } from 'react-router-dom';
import scss from './AuthNav.module.scss';
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
        <div className={scss.auth}>
          <Link to="/login" className={scss.authButton} onClick={handleClick}>
            <span className={scss.auth_text}>Log IN</span>
            <Paw className={scss.svg} />
          </Link>
          <Link to="/register" className={scss.authButton} onClick={handleClick}>
            <span className={scss.auth_text}>Registration</span>
          </Link>
        </div>
      )}
    </>
  );
}

export default AuthNav;
