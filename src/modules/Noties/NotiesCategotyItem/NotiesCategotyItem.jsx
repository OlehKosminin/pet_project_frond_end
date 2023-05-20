import { useState } from "react";
import { NavLink } from "react-router-dom";

import NoticesCategoryItemSvgSelector from "./NoticesCategoryItemSvgSelector";
import css from "./notiesCategoriItem.module.scss";

const NotiesCategotyItem = (notices) => {
  console.log("notices.items: ", notices.items);
  // const [expandedLocation, setExpandedLocation] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // if (!notices.length) {
  //   return;
  // }

  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  // const toggleLocation = (e) => {
  //   console.log(e, "event");
  //   const cardId = items.filter((items) => items.id === e);
  //   console.log(cardId, "cardid")
  //   if(cardId){setExpandedLocation(!expandedLocation);}
  //   // setExpandedLocation(!expandedLocation);
  //   // const cardId = items.map(({ id }) => {
  //   //   return id;

  //   // })
  //   //  if (e === cardId) {
  //   //    setExpandedLocation(!expandedLocation);
  //   //  }
  //   // console.log(cardId, "cardid");
  // };
  // const { id, animal, text, favorite, category } = items;
  console.log("fjsdklfjl;");
  const pet = notices.items.map(
    ({
      // birthday,
      // breed,
      category,
      comments,
      favorite,
      location,
      // name,
      // owner,
      photoUrl,
      // price,
      // public_id,
      // sex,
      // title,
      _id,
    }) => (
      <li className={css.example_card} key={_id}>
        <div className={css.animal}>
          <p className={css.icon_category}>{category}</p>
          <button
            // className={`${css.favorite} ${
            //   favorite ? css["favorite--active"] : css["favorite--inactive"]
            // }`}
            className={css.favorite}
          >
            {favorite ? (
              <NoticesCategoryItemSvgSelector id="heart-active" />
            ) : (
              <NoticesCategoryItemSvgSelector id="heart" />
            )}
          </button>
          {/* <button className={css.favorite}>H</button> */}
          <button
            // onClick={() => removePets(_id)}
            type="button"
            className={css.deletion}
          >
            <NoticesCategoryItemSvgSelector id="trash" />
          </button>
          <NavLink className={css.add_pet} to="/add-pet">
            Add pet
          </NavLink>
          {/* <button >Add pet</button> */}
          {photoUrl}
          <ul className={css.animalsDataList}>
            <li className={css.animalsData}>
              <div
                className={`${css.animalsDataText} ${
                  hoveredCardId === _id ? css.expandedLocation : ""
                }`}
                // onMouseEnter={() => toggleLocation(id)}
                // onMouseLeave={() => toggleLocation("")}
                onMouseEnter={() => handleMouseEnter(_id)}
                onMouseLeave={handleMouseLeave}
              >
                <p className={css.locationTitle} title={location}>
                  <NoticesCategoryItemSvgSelector id="location" />
                  {location.length > 5
                    ? `${location.slice(0, 5)}...`
                    : location}
                </p>
                {hoveredCardId && (
                  <p className={css.locationContent}>{location}</p>
                )}
              </div>
            </li>
            <li className={css.animalsData}>
              <p className={css.animalsDataText}>
                <NoticesCategoryItemSvgSelector id="clock" />
                gggggg
              </p>
            </li>
            <li className={css.animalsData}>
              <p className={css.animalsDataText}>
                <NoticesCategoryItemSvgSelector id="female" />
                female
              </p>
            </li>
          </ul>
        </div>

        <p className={css.animal_description}>{comments}</p>

        <button className={css.more_info_btn}>Learn more</button>
      </li>
    )
  );
  console.log("flksjdl;fs");
  return (
    <>
      {!pet ? (
        <div></div>
      ) : (
        <div>
          <ul className={css.wrapper}> {pet}</ul>
        </div>
      )}
    </>
  );
};

export default NotiesCategotyItem;

// const dataToRender =
//   categoryName === "favorite"
//     ? favoriteAds
//     : categoryName === "owner"
//     ? ownNotices
//     : notices.notices;
// useEffect(() => {
//   if (categoryName === "favorite") {
//     dispatch(getFavorite());
//   } else if (categoryName === "owner") {
//     dispatch(getUserNotices());
//   } else {
//     dispatch(getNoticeByCategory({ category: categoryName }));
//   }
//   return () => dispatch(clearNotices([]));
// }, [dispatch, categoryName]);

// const dataToRender =
//   categoryName === "favorite"
//     ? favoriteAds
//     : categoryName === "owner"
//     ? ownNotices
//       : notices.notices;

// import React, { useEffect, useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";

// import { useRoute } from "../router";

// import { useSelector, useDispatch } from "react-redux";

// import { authStateChangeuser } from "../redux/auth/authOperations";

// const Main = () => {
//   const [user, setUser] = useState(null);
//   const { stateChange } = useSelector((state) => state.auth);
//   console.log(stateChange);
//   const dispatch = useDispatch();

//   const routing = useRoute(stateChange);

//   useEffect(() => {
//     dispatch(authStateChangeuser());
//   }, []);

//   return <NavigationContainer>{routing}</NavigationContainer>;
// };

// export default Main;
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyC7vKyfr5KcfnlXyWcaJbtf_mCa9bNHn2Y",
//   authDomain: "native-greed.firebaseapp.com",
//   projectId: "native-greed",
//   storageBucket: "native-greed.appspot.com",
//   messagingSenderId: "89972788640",
//   appId: "1:89972788640:web:33dca94589fb3d9c4568c5",
//   measurementId: "G-07NSNYR6BJ"
// };

// const app = initializeApp(firebaseConfig);
// export default app;
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
// Олександр Бондарчук — Вчера, в 23:58
// $accent-yelow-color
// Олександр Бондарчук — Сегодня, в 0:09
// export default styled;
// Олександр Бондарчук — Сегодня, в 21:49
// function NoticesPage() {
//   const { categoryName } = useParams();
//   const notices = useSelector(getNotices);
//   const isLoading = useSelector(getNoteceIsLoadig);
//   const favoriteNotices = useSelector(getFavorites);
//   const favoriteAds = favoriteNotices?.user?.favorite || [];
//   const ownNotices = useSelector(getOwnNotices);
//   const dispatch = useDispatch();

//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     if (categoryName === 'favorite') {
//       dispatch(getFavorite());
//     } else if (categoryName === 'owner') {
//       dispatch(getUserNotices());
//     } else {
//       dispatch(getNoticeByCategory({ category: categoryName }));
//     }
//     return () => dispatch(clearNotices([]));
//   }, [dispatch, categoryName]);

//   const dataToRender =
//     categoryName === 'favorite'
//       ? favoriteAds
//       : categoryName === 'owner'
//       ? ownNotices
//         : notices.notices;

//   const handleSearch = (newQuery) => {
//   setQuery(newQuery);
// };

//   const handleClearQuery = () => {
//     setQuery("");
//   };
