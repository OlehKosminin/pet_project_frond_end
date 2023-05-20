import { Link } from "react-router-dom";
import style from "./addPetBtn.module.css";

const AddPetButton = () => {
  return (
    <Link className={style.a} to={"/add-pet"}>
      <p className={style.font}>Add Pet</p>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 7V17M7 12L17 12"
          stroke="#FEF9F9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Link>
  );
};

export default AddPetButton;
