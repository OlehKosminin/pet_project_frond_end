import PetsItem from "../PetsItem/PetsItem";
import css from "./PetsList.module.scss";

const list = [
  {
    id: "1",
    photo: "",
    name: "Jack",
    birthday: "22.04.2018",
    breed: "Persian cat",
    comments:
      "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bit shy, he's a loyal and affectionate lap cat.",
  },
  {
    id: "2",
    photo: "",
    name: "Jack",
    birthday: "01.01.2019",
    breed: "Basenji",
    comments:
      "Jack is a handsome Basenji with short, shiny red fur and perky ears. He's an active and intelligent dog that loves to explore and play. Jack is independent and strong-willed, but also affectionate and loyal to his family. He's a curious and energetic companion that brings joy and adventure to his family's life.",
  },
];

const PetsList = () => {
  return (
    <ul className={css.list}>
      {list.map((pet) => {
        return <PetsItem key={pet.id} pet={pet} />;
      })}
    </ul>
  );
};

export default PetsList;
