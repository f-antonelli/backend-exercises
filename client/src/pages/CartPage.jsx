import CartList from '../components/Cart/CartList';
import useCart from '../hooks/useCart';
import styles from './styles.module.scss';

const CartPage = () => {
  const { cart } = useCart(1);
  return (
    <div className={styles.container}>
      <h2 className={styles.cartTitle}>Cart</h2>
      <CartList products={cart} />
    </div>
  );
};

export default CartPage;
