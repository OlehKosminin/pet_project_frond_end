import css from "./ModalNotice.module.scss";
import defaultNoticeAvatar from "../../assets/image/defaultNoticeAvatar.png";

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as HeartSvg } from "../../assets/image/icons/heart.svg";

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

const ModalNotice = ({ close, itemInfo }) => {
  // const dispatch = useDispatch();
  // const ownerInfo = useSelector((store) => store.noties.oneNotice);

  console.log(itemInfo);
  const {
    birthday,
    breed,
    category,
    comments,
    location,
    name,
    photoUrl,
    price,
    sex,
    title,
    owner,
    favorite,
  } = itemInfo;

  // useEffect(() => {
  //   dispatch;
  // }, []);

  return (
    <div className={css.modalNotice}>
      <div className={css.modalNoticeBody}>
        <div className={css.flagWrapper}>
          <span className={css.categoryFlag}>{category}</span>
        </div>
        <img
          src={photoUrl || defaultNoticeAvatar}
          alt="avatar"
          className={css.noticeAvatarImg}
        />
        <div className={css.noticeWrapper}>
          <h2 className={css.modalNoticeTitle}>{title}</h2>
          <ul className={css.petInfoList}>
            <li className={css.petInfoListItem}>
              <span className={css.petInfoListItemTitle}>Name:</span>
              <span className={css.petInfoListItemValue}>{name}</span>
            </li>
            <li className={css.petInfoListItem}>
              <span className={css.petInfoListItemTitle}>Birthday:</span>
              <span className={css.petInfoListItemValue}>
                {getYear(birthday)}
              </span>
            </li>
            <li className={css.petInfoListItem}>
              <span className={css.petInfoListItemTitle}>Breed:</span>
              <span className={css.petInfoListItemValue}>{breed}</span>
            </li>
            <li className={css.petInfoListItem}>
              <span className={css.petInfoListItemTitle}>Place:</span>
              <span className={css.petInfoListItemValue}>{location}</span>
            </li>
            <li className={css.petInfoListItem}>
              <span className={css.petInfoListItemTitle}>The sex:</span>
              <span className={css.petInfoListItemValue}>{sex}</span>
            </li>
            <li className={css.petInfoListItem}>
              <span className={css.petInfoListItemTitle}>Email:</span>
              <a href="mailto:user@mail.com" className={css.petContact}>
                user@mail.com
              </a>
            </li>
            <li className={css.petInfoListItem}>
              <span className={css.petInfoListItemTitle}>Phone:</span>
              <a href="tel:+380971234567" className={css.petContact}>
                +380971234567
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.modalNoticeFooter}>
        <article className={css.comments}>
          <h3 className={css.commentsTitle}>Comments: </h3>
          <p className={css.commentsText}>{comments}</p>
        </article>
        <div className={css.modalNoticeBtns}>
          <button type="button" className={css.modalNoticeBtnAdd}>
            Add to <HeartSvg className={css.heartSvg} />
          </button>
          <button type="button" className={css.modalNoticeBtnContact}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalNotice;
