import css from "./LogoutBtn.module.scss";
import Modal from "../../../shared/components/Modal/Modal";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";
import { useState } from "react";
import logoutIcon from "../../../assets/image/icons/logout.svg";

const Logout = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalWindow = () => {
    setShowModal(true);
  };

  const closeModalWindow = () => {
    setShowModal(false);
  };

  return (
    <div className={css.wrapper}>
      <button type="button" className={css.btn} onClick={showModalWindow}>
        <img className={css.icon} src={logoutIcon} alt="logout icon" />
        <span className={css.text}>Log Out</span>
      </button>
      {showModal && (
        <Modal
          children={<ModalApproveAction close={closeModalWindow} />}
          close={closeModalWindow}
        />
      )}
    </div>
  );
};

export default Logout;
