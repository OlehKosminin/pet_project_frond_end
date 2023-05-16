
import { useState, useEffect } from "react";

import NotiesCategotyItem from "../NotiesCategotyItem/NotiesCategotyItem";

import css from "./notiesCategoriesList.module.scss";
import items from "./pets";


const NotiesCategoriesList = () => {
  const [pets, setPets] = useState([]);
  

  useEffect(() => {
    const data = items;
   setPets([...data])
  }, [])

  const handlDelete = (id) => {
    const result = pets.filter((pet) => pet.id !== id);
    setPets([...result])
  }

  // const { id, animal, text } = items;
  // const pets = items.map(({ id, animal, text, favorite, category }) => (
  //   <li className={css.example_card} key={id}>
  //     <div>
  //       <div className={css.animal}>
  //         <p className={css.icon_category}>{category}</p>
  //         <button
  //           className={`${css.favorite} ${
  //             favorite ? css["favorite--active"] : css["favorite--inactive"]
  //           }`}
  //         >
  //           H
  //         </button>
  //         {/* <button className={css.favorite}>H</button> */}
  //         <button className={css.deletion}>K</button>
  //         <button className={css.add_pet}>Add pet</button>
  //         {animal}
  //         <ul className={css.animalsDataList}>
  //           <li className={css.animalsData}>
  //             <p className={css.animalsDataText}>Kropiv</p>
  //           </li>
  //           <li className={css.animalsData}>
  //             <p className={css.animalsDataText}>ear gggggg</p>
  //           </li>
  //           <li className={css.animalsData}>
  //             <p className={css.animalsDataText}>female gg</p>
  //           </li>
  //         </ul>
  //       </div>

  //       <p className={css.animal_description}>{text}</p>

  //       <button className={css.more_info_btn}>Learn more</button>
  //     </div>
  //   </li>
  // ));
  return (
    <div className={css.container}>
      {/* <ul className={css.wrapper}> */}
        <NotiesCategotyItem removePets={handlDelete} items={pets} />
      {/* </ul> */}
    </div>
    // <div className={css.container}>
    //   <ul className={css.wrapper}>{pets}</ul>
    // </div>
  );
};

export default NotiesCategoriesList;
