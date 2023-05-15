import css from "./ModalNotice.module.scss";
import defaultNoticeAvatar from "../../assets/image/defaultNoticeAvatar.png";

const ModalNotice = ({ close, noticeAvatarImgSrc }) => {
  return (
    <div className={css.modalNotice}>
      <img
        src={
          noticeAvatarImgSrc === undefined
            ? defaultNoticeAvatar
            : noticeAvatarImgSrc
        }
        alt="avatar"
        className={css.noticeAvatarImg}
      />
      <h2 className={css.modalNoticeTitle}>Сute dog looking for a home</h2>
      <ul className={css.petInfoList}>
        <li className={css.petInfoListItem}>
          Name: <span>Hasan</span>
        </li>
        <li className={css.petInfoListItem}></li>
        <li className={css.petInfoListItem}></li>
        <li className={css.petInfoListItem}></li>
        <li className={css.petInfoListItem}></li>
      </ul>
    </div>
  );
};

export default ModalNotice;
