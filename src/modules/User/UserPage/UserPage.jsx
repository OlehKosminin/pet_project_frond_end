// import baseStyle from "../../shared/components/sass/baseStyle.module.scss";
import css from "./UserPage.module.scss";
import UserData from "../UserData/UserData";
import PetList from "../PetsList/PetsList";
import plusIcon from "../../../assets/image/icons/plus-small-white.svg";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const handleAddPet = () => {
    navigate("/add-page");
  };
  return (
    <div className={css.container}>
      <div>
        <h2 className={css.title}>My information:</h2>
        <UserData />
      </div>
      <div className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.title}>My pets:</h2>
          <button type="button" className={css.btn} onClick={handleAddPet}>
            <span className={css.btnText}>AddPet</span>
            <img className={css.icon} src={plusIcon} alt="plus icon" />
          </button>
        </div>
        <PetList />
      </div>
    </div>
  );
};

export default User;
