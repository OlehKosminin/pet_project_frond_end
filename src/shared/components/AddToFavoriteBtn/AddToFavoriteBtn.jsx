import { ReactComponent as HeartSvg } from "../../../assets/image/icons/heart.svg";

import css from "./AddToFavoriteBtn.module.scss";

const AddToFavoriteBtn = () => {
  return (
    <button type="button" className={css.btnAdd}>
      Add to <HeartSvg className={css.heartSvg} />
    </button>
  );
};

export default AddToFavoriteBtn;
