import PetsItem from "../PetsItem/PetsItem";
import css from "./PetsList.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPets } from "../../../redux/pets/pets-selector";
import { getPets } from "../../../redux/pets/pets-operations";

const PetsList = () => {
  const pets = useSelector(getAllPets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {pets.map((pet) => {
        return <PetsItem key={pet._id} pet={pet} />;
      })}
    </ul>
  );
};

export default PetsList;
