import { ReactComponent as TrashSvg } from "../../../assets/image/icons/trash.svg";

import css from "./modalApproveAction.module.scss";

const ModalApproveAction = ({ children, ModalApproveAction, close }) => {
  const handleApproveClick = () => {
    ModalApproveAction();
    close();
  };

  return (
    <div>
      <div className={css.modalApproveAction}>
        <h2 className={css.title}>Delete adverstiment?</h2>
        <p className={css.modalText}>
          Are you sure you want to delete “Cute dog looking for a home”? You
          can`t undo this action.
        </p>
        <div className={css.btnWrapper}>
          <button className={css.cancelBtn} onClick={close}>
            Cancel
          </button>
          <button className={css.actionBtn} onClick={handleApproveClick}>
            Yes
            <TrashSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalApproveAction;
