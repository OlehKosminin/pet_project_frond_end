import css from "./PetsItem.module.scss";
import Icon from "../components/Icons";
import { useDispatch } from "react-redux";
import { deletePet } from "../../../redux/pets/pets-operations";

const PetsItem = ({ pet }) => {
  const { _id, photoURL, name, birthday, breed, comments } = pet;
  const dispatch = useDispatch();

  const deletePetItem = () => {
    dispatch(deletePet(_id));
  };
  return (
    <li className={css.petItem}>
      <img src={photoURL} alt={name} className={css.petPhoto} />
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
        <Icon id="trash" />
      </button>
    </li>
  );
};

export default PetsItem;
