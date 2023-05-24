import css from "./ModalNotice.module.scss";
import defaultNoticeAvatar from "../../assets/image/defaultNoticeAvatar.png";

import { ReactComponent as HeartSvg } from "../../assets/image/icons/heart.svg";

const ModalNotice = ({ close, noticeAvatarImgSrc }) => {
  return (
    <div className={css.modalNotice}>
      <div className={css.modalNoticeBody}>
        <div className={css.flagWrapper}>
          <span className={css.categoryFlag}>In good hands</span>
        </div>
        <img
          src={
            noticeAvatarImgSrc === undefined
              ? defaultNoticeAvatar
              : noticeAvatarImgSrc
          }
          alt="avatar"
          className={css.noticeAvatarImg}
        />
        <div className={css.noticeWrapper}>
          <h2 className={css.modalNoticeTitle}>Сute dog looking for a home</h2>
          <ul className={css.petInfoList}>
            <li className={css.petInfoListItem}>
              <span className={css.petInfoListItemTitle}>Name:</span>
              <span className={css.petInfoListItemValue}>Hasan</span>
            </li>
            <li className={css.petInfoListItem}>
              <span className={css.petInfoListItemTitle}>Birthday:</span>
              <span className={css.petInfoListItemValue}>21.09.2020</span>
            </li>
            <li className={css.petInfoListItem}>
              <span className={css.petInfoListItemTitle}>Breed:</span>
              <span className={css.petInfoListItemValue}>Pomeranian</span>
            </li>
            <li className={css.petInfoListItem}>
              <span className={css.petInfoListItemTitle}>Place:</span>
              <span className={css.petInfoListItemValue}>Lviv</span>
            </li>
            <li className={css.petInfoListItem}>
              <span className={css.petInfoListItemTitle}>The sex:</span>
              <span className={css.petInfoListItemValue}>male</span>
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
          <p className={css.commentsText}>
            Rich would be the perfect addition to an active family that loves to
            play and go on walks. I bet he would love having a doggy playmate
            too!
          </p>
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
