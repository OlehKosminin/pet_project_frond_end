import { NavLink } from "react-router-dom";
import css from "./noticesCategoryNav.module.scss";

const NoticesCategoriesNavigation = () => {
    // const getFullName = ({ isActive }) => {
    //   return isActive
    //     ? `${css.buttonCategory} ${css.active}`
    //     : css.buttonCategory;
    // };
    
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
          <>
            <NavLink className={css.buttonCategory} to="/notices/favorite">
              favorite ads
            </NavLink>
            <NavLink className={css.buttonCategory} to="/notices/owner">
              my ads
            </NavLink>
          </>
        </div>

        <button className={css.filter}>Filter</button>
        <NavLink className={css.addPet} to="/add-pet">
          Add Pet
        </NavLink>
      </div>
    );
}
export default NoticesCategoriesNavigation