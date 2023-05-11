import { NavLink } from "react-router-dom";

// загальна навігація
const Nav = () => {
  return (
    <div>
      <p>Nav</p>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/notices">notices</NavLink>
      <NavLink to="/friends">friends</NavLink>
    </div>
  );
};

export default Nav;
