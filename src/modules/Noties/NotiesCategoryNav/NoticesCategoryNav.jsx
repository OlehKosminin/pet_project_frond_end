import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import { getUser } from "../../../redux/user/user-selectors";
import { getUser } from "../../../redux/auth/auth-selector";
import css from "./noticesCategoryNav.module.scss";

const NoticesCategoriesNavigation = () => {
    // const getFullName = ({ isActive }) => {
    //   return isActive
    //     ? `${css.buttonCategory} ${css.active}`
    //     : css.buttonCategory;
    // };
    const { token } = useSelector(getUser);
   
    return (
      <div className={css.wrapper}>
        <div className={css.buttonCategoryWrapper}>
          <NavLink className={css.buttonCategory} to="/notices/sell">
            sell
          </NavLink>
          <NavLink className={css.buttonCategory} to="/notices/lost found">
            lost/found
          </NavLink>
          <NavLink className={css.buttonCategory} to="/notices/in good hands">
            in good hands
          </NavLink>
         {token && (<>
            <NavLink className={css.buttonCategory} to="/notices/favorite">
              favorite adds
            </NavLink>
            <NavLink className={css.buttonCategory} to="/notices/my-pets">
              my adds
            </NavLink>
          </>)}
        </div>

        {/* <button className={css.filter}>Filter</button> */}
        <NavLink className={css.addPet} to="/add-pet">
          Add Pet
        </NavLink>
      </div>
    );
}
export default NoticesCategoriesNavigation