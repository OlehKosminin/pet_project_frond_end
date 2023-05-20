import LoginForm from "../../modules/AuthForms/LoginForm/LoginForm";
import styles from "../../shared/components/sass/authPages.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const getIsLogin = useSelector((state) => state.auth.isLogin);

  if (getIsLogin) {
    navigate("/user", { replace: true });
  }

  return (
    <div className={styles.page}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
