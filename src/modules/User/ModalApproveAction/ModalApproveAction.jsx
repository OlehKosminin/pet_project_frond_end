import css from "./ModalApproveAction.module.scss";
import crossIcon from "../../../assets/image/icons/cross.svg";
import logoutIcon from "../../../assets/image/icons/logout-white.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/auth-operations";

const ModalApproveAction = ({ close }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={css.modal}>
      <button type="button" className={css.closeBtn} onClick={close}>
        <img className={css.icon} src={crossIcon} alt="cross icon" />
      </button>
      <h2 className={css.title}>Already leaving?</h2>
      <div className={css.btnWrapper}>
        <button type="button" className={css.cancelBtn} onClick={close}>
          <span className={css.cancelBtnText}>Cancel</span>
        </button>
        <button type="button" className={css.actionBtn} onClick={handleLogOut}>
          <span className={css.actionBtnText}>Yes</span>
          <img src={logoutIcon} alt="logout icon" style={{ stroke: "white" }} />
        </button>
      </div>
    </div>
  );
};

export default ModalApproveAction;
