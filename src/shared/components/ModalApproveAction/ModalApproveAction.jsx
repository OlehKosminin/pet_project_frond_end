import { ReactComponent as TrashSvg } from "../../../assets/image/icons/trash.svg";

const ModalApproveAction = ({ children, ModalApproveAction, close }) => {
  const handleApproveClick = () => {
    ModalApproveAction();
    closeModal();
  };

  return (
    <>
      <div className={css.modalApproveAction}>
        <h1 className={css.modalCongratsTitle}>Delete adverstiment?</h1>
        <p className={css.modalCongratsText}>
          Are you sure you want to delete “Cute dog looking for a home”? You
          can`t undo this action.
        </p>
        <button onClick={close}>Cancel</button>
        <button onClick={handleApproveClick}>
          Yes
          <TrashSvg />
        </button>
      </div>
    </>
  );
};

export default ModalApproveAction;
