import css from "./ModalApproveAction.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/auth-operations";
import Icon from "../components/Icons";

const ModalApproveAction = ({ close }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={css.modalUser}>
      <button type="button" className={css.closeBtn} onClick={close}>
        <Icon id="cross" />
      </button>
      <h2 className={css.title}>Already leaving?</h2>
      <div className={css.btnWrapper}>
        <button type="button" className={css.cancelBtn} onClick={close}>
          <span className={css.cancelBtnText}>Cancel</span>
        </button>
        <button type="button" className={css.actionBtn} onClick={handleLogOut}>
          <span className={css.actionBtnText}>Yes</span>
          <Icon id="logout" />
        </button>
      </div>
    </div>
  );
};

export default ModalApproveAction;
