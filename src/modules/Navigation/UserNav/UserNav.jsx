import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserLogo from '../../../assets/image/icons/user.svg';
import css from './UserNav.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getCurrentUser } from '../../../redux/user/user-operations';

function isMobileDevice() {
  return (
    window.innerWidth < 767 ||
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1
  );
}

function UserNav({ handleLinkClick }) {
  const isLogIn = useSelector(state => state.auth.token);
  const [isMobile, setIsMobile] = useState(isMobileDevice());

  const user = useSelector(getCurrentUser);
  const { email } = user;
  function splitResult() {
    if (email) {
      return email.split('@')[0];
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };

  return (
    <nav className={css.nav}>
      <ul>
        <li>
          <Link to="/user" onClick={handleClick}>
            <img className={css.icon} src={UserLogo} alt="UserLogo" />
            {isMobile ? null : (
              <span className={css.name}>
                {isLogIn ? splitResult() : 'User'}
              </span>
            )}
            <span className={css.backdrop_name}>
              {isLogIn ? splitResult() : 'User'}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default UserNav;
