import { ErrorMessage, useField } from 'formik';
import styles from './input.module.scss';
export const TextInput = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div className={styles.container}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={styles.input} {...field} {...props} />
      <ErrorMessage className={styles.error} name={props.name} component='span' />
    </div>
  );
};
