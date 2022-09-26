import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import createUser from '../../services/createUser';
import { TextInput } from '../Form/TextInput';

import styles from './register.module.scss';

const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={values =>
        createUser(values).then(res => {
          navigate('/login');
        })
      }
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'El nombre debe tener mas de 3 caracteres')
          .max(15, 'El nombre debe ser menor de 15 caracteres')
          .required('Requerido'),
        email: Yup.string().email('Formato no valido').required('Requerido'),
        password: Yup.string().min(6, 'Minimo 6 caracteres').required('Requerido'),
      })}
    >
      {() => (
        <Form className={styles.container}>
          <TextInput label='Nombre' name='name' placeholder='Nombre' />
          <TextInput label='Email' name='email' placeholder='Email' />
          <TextInput label='Password' name='password' type='password' placeholder='*****' />

          <button className={styles.button} type='submit'>
            Create User
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
