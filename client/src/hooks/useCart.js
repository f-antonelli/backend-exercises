import { useEffect, useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import getProdFromCart from '../services/getProdFromCart';

const useProducts = () => {
  const { cart, setCart } = useContext(ProductsContext);

  useEffect(() => {
    getProdFromCart().then(cart => setCart(cart));
  }, [setCart]);
  return { cart };
};

export default useProducts;
