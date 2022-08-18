import { useEffect, useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import getProducts from '../services/getProducts';

const useProducts = () => {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts().then(products => setProducts(products));
  }, [setProducts]);
  return { products };
};

export default useProducts;
