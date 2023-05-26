import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSingleNotice } from "../../../shared/services/noties";
import { useSwitch } from "../../../hooks/useSwitch";
import Loader from "../../../shared/components/Loader/Loader";
import ModalNotice from "../../ModalNotice/ModalNotice";
import ModalApproveAction from "../../../shared/components/ModalApproveAction/ModalApproveAction";
import Modal from "../../../shared/components/Modal/Modal";

import { ReactComponent as TrashSvg } from "../../../assets/image/icons/trash.svg";
import NoticesCategoryItemSvgSelector from "./NoticesCategoryItemSvgSelector";
import css from "./notiesCategoriItem.module.scss";

import {
  myAddFavoriteNotices,
  removeMyFavoriteNotices,
  deleteNotice,
} from "../../../redux/noties/noties-operations";

const NotiesCategotyItem = ({ items }) => {
  const [copyItems, setCopyItems] = useState(items.result);
  const { isOpen, open, close } = useSwitch(false);
  const [modalChild, setModalChild] = useState(<Loader />);
  // const [expandedLocation, setExpandedLocation] = useState(false);
  const [hoveredLocationCardId, setHoveredLocationCardId] = useState(null);
  const dispatch = useDispatch();
  const id_user = useSelector((store) => store.auth.user._id);

  const changeFavorite = (isAdd, _id) => {
    // const xxx = [...array, _id]
    // setArray(xxx);
    if (isAdd) {
      dispatch(removeMyFavoriteNotices(_id, id_user));
      setCopyItems((prev) =>
        prev.map((notice) =>
          notice._id === _id
            ? {
                ...notice,
                favorite: notice.favorite.filter((ii) => ii !== id_user),
              }
            : notice
        )
      );
      return;
    } //dispatch favorite add
    dispatch(myAddFavoriteNotices(_id, id_user));
    setCopyItems((prev) =>
      prev.map((notice) =>
        notice._id === _id
          ? { ...notice, favorite: [...notice.favorite, id_user] }
          : notice
      )
    );
  };

  const noticesDelete = (_id) => {
    dispatch(deleteNotice(_id));
  };
  const learnMoreInfo = async ({ id, name }) => {
    const { result } = await getSingleNotice(id);
    if (name === "openLearnMore") {
      setModalChild(
        <ModalNotice
          itemInfo={result}
          favoriteSwitch={changeFavorite}
          close={close}
        />
      );
    }
    if (name === "deleteItem") {
      setModalChild(<ModalApproveAction itemInfo={result} close={close} />);
    }
    // setNotice(data);
    // setOwner(user);
    open(true);
  };

  //  console.log(array, "array");
  //   useEffect(() => {
  //     console.log(array, "array");
  //     setArray(id_user);
  //   }, [changeFavorite]);
  // const isLoading = useSelector((store) => store.noties.notices.isLoading)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  });

  const handleClick = (e) => {
    learnMoreInfo({
      id: e.target.id,
      name: e.currentTarget.name,
    });
  };

  const handleMouseEnter = (id) => {
    setHoveredLocationCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredLocationCardId(null);
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

  const pet = copyItems.map(
    ({
      birthday,
      // breed,
      category,
      comments,
      favorite,
      location,
      // name,
      owner,
      photoUrl,
      // price,
      // public_id,
      sex,
      // title,
      _id,
    }) => {
      return (
        <li className={css.example_card} key={_id}>
          <div className={css.animal}>
            <img
              className={css.photoPet}
              alt=""
              width="384"
              height="288"
              src={photoUrl}
            />
            <p className={css.icon_category}>{category}</p>
            <button
              type="button"
              name="favorite"
              onClick={() => {
                const isAdd = favorite.includes(id_user);
                changeFavorite(isAdd, _id);
                //   if (!isAdd){
                //     copyFavorite = [...copyFavorite, id_user];
                //   }
                //   if (isAdd) {
                //     copyFavorite = copyFavorite.filter(item_user => item_user !== id_user);
                // }
              }}
              className={css.favorite}
            >
              <NoticesCategoryItemSvgSelector
                id={favorite.includes(id_user) ? "heart-active" : "heart"}
              />
            </button>
            {/* <button className={css.favorite}>H</button> */}
            {id_user === owner && (
              <button
                onClick={() => noticesDelete(_id)}
                name="deleteItem"
                // onClick={(e) => handleClick(e)}
                // id={_id}
                type="button"
                className={css.deletion}
              >
                <TrashSvg name="trash" />
              </button>
            )}
            <NavLink className={css.add_pet} to="/add-pet">
              Add pet
            </NavLink>
            {/* <button >Add pet</button> */}

            <ul className={css.animalsDataList}>
              <li className={css.animalsData}>
                <div
                  className={`${css.animalsDataText} ${
                    hoveredLocationCardId === _id ? css.expandedLocation : ""
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
                  {hoveredLocationCardId && (
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
            type="button"
            onClick={(e) => handleClick(e)}
            id={_id}
          >
            Learn more
          </button>
        </li>
      );
    }
  );

  return (
    <>
      {!pet ? (
        <div></div>
      ) : (
        <div>
          <ul className={css.wrapper}> {pet}</ul>

          {isOpen && (
            <Modal isOpen={isOpen} close={close}>
              {modalChild}
            </Modal>
          )}
        </div>
      )}
      {/* {isLoading && <Loader />} */}
    </>
  );
};

export default NotiesCategotyItem;
