import css from "./ModalCongrats.module.scss";
import { ReactComponent as PawprintSvg } from "../../assets/image/icons/pawprint.svg";

const ModalCongrats = ({ close }) => {
  return (
    <div className={css.modalCongrats}>
      <h1 className={css.modalCongratsTitle}>Congrats!</h1>
      <p className={css.modalCongratsText}>You`re registration is success</p>
      <button className={css.modalCongratsBtn} onClick={close}>
        Go to profile
        <PawprintSvg className={css.pawprintSvg} />
      </button>
    </div>
  );
};

export default ModalCongrats;
