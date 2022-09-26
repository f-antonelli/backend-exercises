import LoginForm from '../components/Auth/LoginForm';
import styles from './styles.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.boxRegister}>
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
