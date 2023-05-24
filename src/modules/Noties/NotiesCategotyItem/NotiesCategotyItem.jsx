import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useSwitch } from "../../../hooks/useSwitch";

import { getSingleNotice } from "../../../redux/noties/noties-operations";

import Loader from "../../../shared/components/Loader/Loader";
import ModalNotice from "../../ModalNotice/ModalNotice";
import ModalApproveAction from "../../../shared/components/ModalApproveAction/ModalApproveAction";
import Modal from "../../../shared/components/Modal/Modal";

import { ReactComponent as TrashSvg } from "../../../assets/image/icons/trash.svg";
import NoticesCategoryItemSvgSelector from "./NoticesCategoryItemSvgSelector";
import css from "./notiesCategoriItem.module.scss";

const NotiesCategotyItem = ({ items }) => {
  const { isOpen, itemInfo, open, close } = useSwitch(false);
  // const [modalChild, setModalChild] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const id_user = useSelector((store) => store.auth.user._id);
  const dispatch = useDispatch();
  let noticeItem = useSelector((store) => store.noties.oneNotice);
  // console.log("noticesItem: ", noticeItem);
  // const [expandedLocation, setExpandedLocation] = useState(false);

  useEffect(() => {
    if (itemInfo.name === "openLearnMore" && isOpen === true) {
      dispatch(getSingleNotice(itemInfo.id));
    }
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    }

    return () => {
      noticeItem = null;
      console.log(noticeItem);
      document.body.style.overflowY = "auto";
    };
  }, [isOpen, dispatch]);

  // if (!notices.length) {
  //   return;
  // }

  const modalChoice = () => {
    if (itemInfo.name === "openLearnMore") {
      if (noticeItem === null) {
        return <Loader />;
      } else {
        return <ModalNotice close={close} itemInfo={noticeItem} />;
      }
    }
    if (itemInfo.name === "deleteItem") {
      return <ModalApproveAction close={close} />;
    }
  };

  const handleClick = (e) => {
    console.log(e.currentTarget);
    const itemInfo = {
      id: e.target.id,
      name: e.currentTarget.name,
    };
    open(itemInfo);
  };

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

  const getYear = (birthday) => {
    const value = Date.now() - birthday;
    const date = new Date(value);
    // const date = dateOll - 1970;
    const year = date.getFullYear();
    if (year === 1970) {
      const month = String(date.getMonth() + 1).padStart(2, "0");
      return `${month} mth`;
    }

    return `${year - 1970} year`;
  };

  const changeFavorite = (isAdd) => {
    if (isAdd) return; //dispatch favorite add
    if (!isAdd) return; //dispatch favorite remove
  };

  const pet = items.result.map(
    ({
      birthday,
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
      sex,
      title,
      _id,
    }) => (
      <li className={css.example_card} key={_id}>
        <div className={css.animal}>
          <img className={css.photoPet} alt="" src={photoUrl} />
          <p className={css.icon_category}>{category}</p>
          <button
            onClick={() => changeFavorite(favorite.includes(id_user))}
            className={css.favorite}
          >
            {/*{favorite.includes(id_user) ? (*/}
            {/*  <NoticesCategoryItemSvgSelector id="heart-active" />*/}
            {/*) : (*/}
            {/*  <NoticesCategoryItemSvgSelector id="heart" />*/}
            {/*)}*/}

            <NoticesCategoryItemSvgSelector
              id={favorite.includes(id_user) ? "heart-active" : "heart"}
            />
          </button>
          {/* <button className={css.favorite}>H</button> */}
          <button
            // onClick={() => removePets(_id)}
            name="deleteItem"
            onClick={(e) => handleClick(e)}
            type="button"
            className={css.deletion}
          >
            <TrashSvg name="trash" />
          </button>
          <NavLink className={css.add_pet} to="/add-pet">
            Add pet
          </NavLink>
          {/* <button >Add pet</button> */}

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
                {getYear(birthday)}
                {/* {birthday} */}
              </p>
            </li>
            <li className={css.animalsData}>
              <p className={css.animalsDataText}>
                <NoticesCategoryItemSvgSelector id={sex} />
                {sex}
              </p>
            </li>
          </ul>
        </div>

        <p className={css.animal_description}>{comments}</p>

        <button
          className={css.more_info_btn}
          name="openLearnMore"
          id={_id}
          onClick={(e) => handleClick(e)}
        >
          Learn more
        </button>
      </li>
    )
  );

  return (
    <>
      {!pet ? (
        <div></div>
      ) : (
        <div>
          <ul className={css.wrapper}> {pet}</ul>

          {isOpen && (
            <Modal isOpen={isOpen} close={close} children={modalChoice()} />
          )}
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
