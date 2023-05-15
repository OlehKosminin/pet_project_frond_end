import LoginForm from "../../modules/AuthForms/LoginForm/LoginForm";
import styles from "./login-page.module.scss";

const LoginPage = () => {
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
