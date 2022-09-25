import RegisterForm from '../components/Register/RegisterForm';
import styles from './styles.module.scss'

const RegisterPage = () => {
  return (
    <div className={styles.boxRegister}>
      <h1>Register Page</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
