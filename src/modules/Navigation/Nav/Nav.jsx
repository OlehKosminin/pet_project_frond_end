import { NavLink } from 'react-router-dom';
import scss from './Nav.module.scss';


function Nav({ handleLinkClick }) {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };

  return (
    <ul className={scss.nav}>
      <li className={scss.nav_item}>
        <NavLink
          className={({ isActive }) => (isActive ? scss.active : '')}
          to="/news"
          onClick={handleClick}
        >
          News
        </NavLink>
      </li>
      <li className={scss.nav_item}>
        <NavLink
          className={({ isActive }) => (isActive ? scss.active : '')}
          to="/notices/sell"
          onClick={handleClick}
        >
          Find Pet
        </NavLink>
      </li>
      <li className={scss.nav_item}>
        <NavLink
          className={({ isActive }) => (isActive ? scss.active : '')}
          to="/friends"

          onClick={handleClick}
        >
          Our Friends
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
