import RegisterForm from "../../modules/AuthForms/RegisteForm/RegisterForm";
import styles from "./register-page.module.scss";

const RegisterPage = () => {
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
