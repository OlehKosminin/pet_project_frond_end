import css from "./notiesCategoriItem.module.scss"


const NotiesCategotyItem = ({removePets, items}) => {
  console.log(items)
  // const { id, animal, text, favorite, category } = items;
const pet = items.map(({ id, animal, text, favorite, category} ) => (
  <li className={css.example_card} key={id}>
    <div>
      <div className={css.animal}>
        <p className={css.icon_category}>{category}</p>
        <button
          className={`${css.favorite} ${
            favorite ? css["favorite--active"] : css["favorite--inactive"]
          }`}
        >
          H
        </button>
        {/* <button className={css.favorite}>H</button> */}
        <button onClick={()=>removePets(id)} type="button" className={css.deletion}>K</button>
        <button className={css.add_pet}>Add pet</button>
        {animal}
        <ul className={css.animalsDataList}>
          <li className={css.animalsData}>
            <p className={css.animalsDataText}>Kropiv</p>
          </li>
          <li className={css.animalsData}>
            <p className={css.animalsDataText}>ear gggggg</p>
          </li>
          <li className={css.animalsData}>
            <p className={css.animalsDataText}>female gg</p>
          </li>
        </ul>
      </div>

      <p className={css.animal_description}>{text}</p>

      <button className={css.more_info_btn}>Learn more</button>
    </div>
  </li>
));

  return (
    <div>
      <ul className={css.wrapper}> {pet}</ul>
    </div>
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