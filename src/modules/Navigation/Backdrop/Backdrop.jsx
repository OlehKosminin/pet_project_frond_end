import { React, useState, useEffect } from 'react';
import scss from './Backdrop.module.scss';
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Nav from '../Nav/Nav';
import Logo from '../../Logo/Logo';
import UserNav from '../UserNav/UserNav';
import { CrossSmallIcon } from '../../../assets/image/icons/CrossSmallIcon';

function isTabletDevice() {
  return window.innerWidth > 767;
}

const BackdropMenu = ({ isOpen, handleClose }) => {
  const handleLinkClick = () => {
    handleClose();
  };
  const [isTablet, setTabletDevice] = useState(isTabletDevice());
  const isLogIn = useSelector(state => state.auth.token);

  useEffect(() => {
    const handleResize = () => {
      setTabletDevice(isTabletDevice());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className={scss.backdrop}>
          <div className={scss.menu}>
            <button className={scss.btn} onClick={handleClose}>
              <CrossSmallIcon id="svg" className={scss.crossSmallIcon} />
            </button>
            <Logo handleLinkClick={handleLinkClick} />

            {isLogIn && !isTablet ? (
              <div className={scss.backdrop_user}>
                <UserNav handleLinkClick={handleLinkClick} />
              </div>
            ) : null}
            {!isLogIn ? (
              <div className={scss.backdrop_auth}>
                <AuthNav handleLinkClick={handleLinkClick} />
              </div>
            ) : null}

            <div className={scss.backdrop_nav}>
              <Nav handleLinkClick={handleLinkClick} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BackdropMenu;
