import css from "./LogoutBtn.module.scss";
import Modal from "../../../shared/components/Modal/Modal";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";
import { useState } from "react";
import Icon from "../components/Icons";

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
        <Icon id="logout" />
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
