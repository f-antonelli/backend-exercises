import ProductsList from '../components/Products/ProductsList';
import useProducts from '../hooks/useProducts';
import styles from './styles.module.scss';

const ProductsPage = () => {
  const { products } = useProducts();

  return (
    <div className={styles.container}>
      <ProductsList products={products} />
    </div>
  );
};

export default ProductsPage;
