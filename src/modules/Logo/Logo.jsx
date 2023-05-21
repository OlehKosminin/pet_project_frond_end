import React from 'react';
import  LogoSvg  from '../../assets/image/logo/logo.svg';
import { Link } from 'react-router-dom';
import css from './Logo.module.css';

function Logo({ handleLinkClick }) {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };
  return (
    <Link to="/main" onClick={handleClick}>
      <img className={css.logo} src={LogoSvg} alt="YourPetLogo" />
    </Link>
  );
}

export default Logo;
