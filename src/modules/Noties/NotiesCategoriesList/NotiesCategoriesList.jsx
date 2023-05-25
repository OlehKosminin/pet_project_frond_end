import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import NotiesCategoryItem from "../NotiesCategotyItem/NotiesCategotyItem";
import {getNoteceIsLoadig, getNotices} from "../../../redux/noties/noties-selector";
import {
  fetchAllNotices,
  fetchOwnNotices,
  fetchFavoriteNotices,
} from "../../../redux/noties/noties-operations";
import { myAddFavoriteNotices } from "../../../redux/noties/noties-operations";

// import { deleteNotices } from "../../../shared/services/noties";

// const initialState = {
//   category: "sell",
//   page: 1,
// };



const NotiesCategoriesList = () => {
  const { category } = useParams();
  const [page, setPage] = useState(1);
  console.log(page, "paginatPage");
  const notices = useSelector(getNotices);
  const isLoadingNotices = useSelector(getNoteceIsLoadig);

  console.log("notices____", notices);

  // const [ state, setState ] = useState();
  const dispatch = useDispatch();
  // const id_user = useSelector((store) => store.auth.user._id);

  // const isLoading = useSelector((store) => store.noties.notices.isLoading)

  // const changeFavorite = (isAdd, _id) => {
  //   console.log("onclick", isAdd);
  //   console.log("onclick id", _id);
  //   if (isAdd) {
  //     dispatch();
  //     return;
  //   } //dispatch favorite add
  //   dispatch(myAddFavoriteNotices(_id));
  // };

  useEffect(() => {
    if (category === "my-pets") {
      dispatch(fetchOwnNotices({ page }));
    }

    if (category === "favorite") {
      dispatch(fetchFavoriteNotices({page}));
    }
    if (
      category === "sell" ||
      category === "lost found" ||
      category === "in good hands"
    ) {
      dispatch(fetchAllNotices({ category, page }));
    }
  }, [dispatch, category, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  // useEffect(() => {
  //   //  setCategor(category);
  //   dispatch(fetchOwnNotices({ page }));
  // }, [dispatch,  page]);

  // console.log("switch", renderNotices);

  // const [pets, setPets] = useState([]);

  // const [pets, setPets] = useState([]);

  // const[deletePetId, setDeletePetId]=useState("")

  // const { category } = useParams();
  // console.log(category, "category");

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
  // const handlDelete = async (id) => {
  //   await deleteNotices(id);
  //   const result = pets.filter((pet) => pet.id === id);
  //   setPets([...result]);
  // setDeletePetId(_id)
  // }
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
      <div>
        {/* <ul className={css.wrapper}> */}
        {isLoadingNotices ? (
          "LOADING..."
        ) : (
          <NotiesCategoryItem
            items={notices}
            // id_user={id_user}
            // changeFavorite={ changeFavorite}
          />
        )}

        <button onClick={loadMore}>load more</button>
        <span>{page}</span>
        {/* </ul> */}
      </div>
    </>
    // <div className={css.container}>
    //   <ul className={css.wrapper}>{pets}</ul>
    // </div>
  );
};

export default NotiesCategoriesList;
