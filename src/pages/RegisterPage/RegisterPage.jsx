import RegisterForm from "../../modules/AuthForms/RegisterForm/RegisterForm";
import styles from "../../shared/components/sass/authPages.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const getIsLogin = useSelector((state) => state.auth.isLogin);
  console.log("isLogin: ", getIsLogin);

  if (getIsLogin) {
    navigate("/user", { replace: true });
  }

  return (
    <div className={styles.page}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
