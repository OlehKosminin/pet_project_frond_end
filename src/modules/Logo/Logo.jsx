import React from 'react';
import  LogoSvg  from '../../assets/image/logo/logo.svg';
import { Link } from 'react-router-dom';
import scss from './Logo.module.scss';

function Logo({ handleLinkClick }) {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };
  return (
    <Link to="/" onClick={handleClick}>
      <img className={scss.logo} src={LogoSvg} alt="YourPetLogo" />
    </Link>
  );
}

export default Logo;
