import RegisterForm from "../../modules/AuthForms/RegisterForm/RegisterForm";
import Loader from "../../shared/components/Loader/Loader";

import styles from "../../shared/components/sass/authPages.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLoading } from "../../redux/auth/auth-selector";

const RegisterPage = () => {
  const navigate = useNavigate();
  const getIsLogin = useSelector((state) => state.auth.isLogin);
  const isLoading = useSelector(getLoading);

  if (getIsLogin) {
    navigate("/user", { replace: true });
  }

  return (
    <div className={styles.page}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <RegisterForm />
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default RegisterPage;
