import { useEffect, useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import getProdFromCart from '../services/getProdFromCart';

const useCart = id => {
  const { cart, setCart } = useContext(ProductsContext);

  useEffect(() => {
    getProdFromCart(id).then(cart => setCart(cart));
  }, [id, setCart]);
  return { cart };
};

export default useCart;
