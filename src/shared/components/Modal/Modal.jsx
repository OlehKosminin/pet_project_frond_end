import PropTypes from "prop-types";
import { useEffect } from "react";

import { createPortal } from "react-dom";
import css from "./modal.module.scss";
const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, close }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeModal);
    return () => document.removeEventListener("keydown", closeModal);
  });

  return createPortal(
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element,
  close: PropTypes.func.isRequired,
};
