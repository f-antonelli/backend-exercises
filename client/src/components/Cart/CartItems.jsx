import styles from './styles.module.scss';

const CartItem = ({ values }) => {
  const { title, description, img, price } = values;
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt={title} />
      <p>{title}</p>
      <p styles={styles.description}>{description}</p>
      <p>${price}</p>
    </div>
  );
};

export default CartItem;
