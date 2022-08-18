import addToCart from '../../services/addToCart';
import styles from './styles.module.scss';

const Product = ({ values }) => {
  const { description, img, price, stock, title } = values;
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt={title} />

      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>

        <div className={styles.boxPrice}>
          <p className={styles.price}>${price}</p>
          <span className={styles.stock}>Stock: {stock}</span>
        </div>

        <button className={styles.button} onClick={() => addToCart(1, values)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
