import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserInfo } from "../../../shared/services/auth";
import {
  getSingleNotice,
  deleteNotices,
} from "../../../shared/services/noties";
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
import { async } from "q";

const NotiesCategotyItem = ({ items }) => {
  const [copyItems, setCopyItems] = useState(items.result);
  const { isOpen, open, close } = useSwitch(false);
  const [modalChild, setModalChild] = useState(<Loader />);
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

  const noticesDelete = async (_id) => {
    // dispatch(deleteNotice(_id));
    await deleteNotices(_id);

//   const noticesDelete = (_id) => {
//     dispatch(deleteNotice(_id));
//     setCopyItems(prev => prev.filter(i => i._id !== _id));

  };

  const learnMoreInfo = async ({ id, name }) => {
    const { result } = await getSingleNotice(id);
    const { data } = await getUserInfo(result.owner);
    // console.log("data user: ", data);
    if (name === "openLearnMore") {
      setModalChild(
        <ModalNotice
          owner={data}
          itemInfo={result}
          favoriteSwitch={changeFavorite}
          close={close}
        />
      );
    }
    if (name === "deleteItem") {
      setModalChild(
        <ModalApproveAction
          itemInfo={result}
          close={close}
          deleteItem={noticesDelete}
        />
      );
    }
    open(true);
  };

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

  const getYear = (birthday) => {
    const value = Date.now() - birthday;
    const date = new Date(value);
    // const date = dateOll - 1970;
    const year = date.getFullYear();
    if (year === 1970) {
      const month = String(date.getMonth() + 1).padStart(2, "0");

      return `${month} mo`;
    }

    return `${year - 1970} year`;
  };

  const pet = copyItems.map(
    ({
      birthday,
      // breed,
      category,
      // comments,
      favorite,
      location,
      // name,
      owner,
      photoUrl,
      // price,
      sex,
      title,
      _id,
    }) => {
      return (
        <li className={css.example_card} key={_id}>
          <div className={css.animal}>
            <img
              className={css.photoPet}
              alt="Pet's"
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
              }}
              className={css.favorite}
            >
              <NoticesCategoryItemSvgSelector
                id={favorite.includes(id_user) ? "heart-active" : "heart"}
              />
            </button>

            {id_user === owner && (
              <button
                name="deleteItem"
                onClick={(e) => handleClick(e)}
                id={_id}
                type="button"
                className={css.deletion}
              >
                <TrashSvg name="trash" />
              </button>
            )}
            <NavLink className={css.add_pet} to="/add-pet">
              Add pet
            </NavLink>

            <ul className={css.animalsDataList}>
              <li className={css.animalsData}>
                <div
                  className={`${css.animalsDataText} ${
                    hoveredLocationCardId === _id ? css.expandedLocation : ""
                  }`}
                  
                  onMouseEnter={() => handleMouseEnter(_id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className={css.locationTitle} >
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

          <p className={css.animal_description}>{title}</p>

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
