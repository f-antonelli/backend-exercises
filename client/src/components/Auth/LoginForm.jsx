import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import apiLogin from '../../services/login';
import { TextInput } from '../Form/TextInput';

import styles from './register.module.scss';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values =>
        apiLogin(values).then(res => {
          console.log(res)
          login(res.token);
          navigate('/');
        })
      }
      validationSchema={Yup.object({
        email: Yup.string().email('Formato no valido').required('Requerido'),
        password: Yup.string().min(6, 'Minimo 6 caracteres').required('Requerido'),
      })}
    >
      {() => (
        <Form className={styles.container}>
          <TextInput label='Email' name='email' placeholder='Email' />
          <TextInput label='Password' name='password' type='password' placeholder='*****' />

          <button className={styles.button} type='submit'>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
