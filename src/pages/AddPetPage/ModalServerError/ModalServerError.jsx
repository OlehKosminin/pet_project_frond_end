import css from "./ModalServerError.module.scss";
import { useCallback } from "react";
import { ReactComponent as PawprintSvg } from "../../../assets/image/icons/pawprint.svg";

const ModalServerError = ({ close }) => {
  const sendDataToParent = () => {
    close(false);
  };
  return (
    <div className={css.backdrop}>
      <div className={css.modalCongrats}>
        <h1 className={css.modalCongratsTitle}>Something went wrong!</h1>
        <p className={css.modalCongratsText}>Try again later</p>
        <button className={css.modalCongratsBtn} onClick={sendDataToParent}>
          Ok
          <PawprintSvg className={css.pawprintSvg} />
        </button>
      </div>
    </div>
  );
};

export default ModalServerError;
