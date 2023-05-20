
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getNotices } from "../../../redux/noties/noties-selector";


import NotiesCategoryItem from "../NotiesCategotyItem/NotiesCategotyItem";

// import css from "./notiesCategoriesList.module.scss";
// import items from "./pets";
import { getAllNotices, deleteNotices } from "../../../shared/services/noties";

// import { useParams } from "react-router";
// import { getNotices } from "../../../redux/noties/noties-selector";

// console.log(getNotices, "getAllNoticesPet");
const NotiesCategoriesList = () => {
  const dispatch = useDispatch();
  const noticesCategori = useSelector(getNotices);
    const noticesCategori = () => {
      dispatch(getNotices("sell"));
    };
  
  const [pets, setPets] = useState([]);
  // const[deletePetId, setDeletePetId]=useState("")
  // console.log(noticesCategori, "reduxCategory")

  // const { category } = useParams();
  // console.log(category, "category");
  

  // useEffect(() => {
  //   const fetch = async () => {
  //     const data = await getAllNotices();
  //     console.log(data, "useeffdata");
  //      setPets(data.result)
  //   }
  //   fetch();
  
  // }, [])

  //  useEffect(() => {
  //    const deletePet = async () => {
  //      const data = await deleteNotices(deletePetId);
  //      console.log(data, "useeffdata");
  //      //  setPets(data.result);
  //    };
  //    deletePet();
  //  }, [deletePetId]);
//  const deletePet = async () => {
//        const data = await deleteNotices(deletePetId);
//        console.log(data, "useeffdata");
  //  const handlDelete = async(id) => {
  //   await deleteNotices(id);
    // const result = pets.filter((pet) => pet.id === id);
    // setPets([...result])
    // setDeletePetId(_id)
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
    <>
     
      <div >
        {/* <ul className={css.wrapper}> */}
        <NotiesCategotyItem removePets={handlDelete} items={pets} />
        {/* </ul> */}
      </div>
    </>
    // <div className={css.container}>
    //   <ul className={css.wrapper}>{pets}</ul>
    // </div>
  );
};

export default NotiesCategoriesList;
