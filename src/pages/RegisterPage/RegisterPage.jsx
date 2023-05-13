import RegisterForm from "../../modules/AuthForms/RegisteForm/RegisterForm";
import styles from "../../shared/components/sass/baseStyle.module.scss";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
