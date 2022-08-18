import Product from './Product';
import styles from './styles.module.scss'

const ProductsList = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map(product => (
        <Product key={product.id} values={product} />
      ))}
    </div>
  );
};

export default ProductsList;
