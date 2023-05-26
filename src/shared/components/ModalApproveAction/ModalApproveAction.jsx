import { useDispatch } from "react-redux";
import { deleteNotice } from "../../../redux/noties/noties-operations";
import { ReactComponent as TrashSvg } from "../../../assets/image/icons/trash1.svg";

import css from "./modalApproveAction.module.scss";

const ModalApproveAction = ({ itemInfo, close, deleteNotice, id }) => {
  console.log("id v modal", id)
   const {
    
     title,
     
   } = itemInfo;
  const handleApproveClick = () => {
    deleteNotice(id);
    close();
  };
  const dispatch = useDispatch();
  const noticesDelete = (_id) => {
    dispatch(deleteNotice(_id));
  };

  return (
    <div>
      <div className={css.modalApproveAction}>
        <h2 className={css.title}>Delete advertisement?</h2>
        <p className={css.modalText}>
          Are you sure you want to delete
          <span className={css.itemName}>{title}</span>?
          <br />
          You can`t undo this action.
        </p>
        <div className={css.btnWrapper}>
          <button className={css.cancelBtn} onClick={close}>
            Cancel
          </button>
          <button className={css.actionBtn} onClick={handleApproveClick}>
            Yes
            <TrashSvg className={css.TrashSvg} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalApproveAction;
