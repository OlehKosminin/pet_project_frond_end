import PropTypes from "prop-types";
import { useEffect } from "react";
import { ReactComponent as ModalCloseBtnSvg } from "../../../assets/image/icons/cross.svg";

import { createPortal } from "react-dom";
import css from "./modal.module.scss";
const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, close }) => {
  useEffect(() => {
    const closeModal = ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", closeModal);
    return () => document.removeEventListener("keydown", closeModal);
  });

  const handleClickBackdrop = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };
  const handleClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleClickBackdrop}>
      <div className={css.modal}>
        <button className={css.modalCloseBtn} onClick={handleClose}>
          <ModalCloseBtnSvg className={css.modalCloseBtnIcon} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element,
  close: PropTypes.func.isRequired,
};

// import ModalNotice from "../../modules/ModalNotice/ModalNotice";
// import ModalCongrats from "../../modules/ModalCongrats/ModalCongrats";
// import { useToggle } from "../../hooks/useToggle";
// import Modal from "../../shared/components/Modal/Modal";

// const { isOpen, open, close } = useToggle(false);

// {isOpen && (
//   <Modal isOpen={isOpen} close={close}>
//     <ModalNotice close={close} />
//   </Modal>
// )}
