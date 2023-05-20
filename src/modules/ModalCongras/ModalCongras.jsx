import { Link } from "react-router-dom";
import styles from "./modal-congras.module.scss";
import { SvgSelector } from "../../pages/AddPetPage/cvgSelector/SvgSelector";
import Icon from "../User/components/Icons";
// import { useNavigate } from "react-router-dom";

const ModalCongras = ({ close }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button type="button" className={styles.closeBtn}>
          <Icon id="cross" />
        </button>

        <h2 className={styles.title}>Congrats!</h2>
        <p className={styles.modalText}>You're registration is success</p>
        <div className={styles.buttonContainer}>
          <Link className={styles.link} to="/user">
            <button type="button" className={styles.button}>
              <p className={styles.text}>Go to profile</p>
              <SvgSelector id="pawprint" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalCongras;
