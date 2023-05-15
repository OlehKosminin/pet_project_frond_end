import LoginForm from "../../modules/AuthForms/LoginForm/LoginForm";
import styles from "./login-page.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
