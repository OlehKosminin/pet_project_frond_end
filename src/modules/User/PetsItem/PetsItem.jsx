import css from "./PetsItem.module.scss";
import trashIcon from "../../../assets/image/icons/trash.svg";

const PetsItem = ({ pet }) => {
  const { id, photo, name, birthday, breed, comments } = pet;

  const deletePetItem = () => {
    console.log(id);
  };
  return (
    <li className={css.petItem}>
      <img src={photo} alt={name} className={css.petPhoto} />
      <ul className={css.petInfo}>
        <li className={css.petInfoField}>
          <span className={css.petInfoTitle}>Name:&#32;</span>
          <span className={css.petInfoDescr}>{name}</span>
        </li>
        <li className={css.petInfoField}>
          <span className={css.petInfoTitle}>Date of birth:&#32;</span>
          <span className={css.petInfoDescr}>{birthday}</span>
        </li>
        <li className={css.petInfoField}>
          <span className={css.petInfoTitle}>Breed:&#32;</span>
          <span className={css.petInfoDescr}>{breed}</span>
        </li>
        <li className={css.petInfoField}>
          <span className={css.petInfoTitle}>Comments:&#32;</span>
          <span className={css.petInfoDescr}>{comments}</span>
        </li>
      </ul>
      <button type="button" className={css.petItemBtn} onClick={deletePetItem}>
        <img src={trashIcon} alt="trash icon" style={{ stroke: "white" }} />
      </button>
    </li>
  );
};

export default PetsItem;
