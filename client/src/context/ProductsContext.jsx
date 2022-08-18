import { createContext, useState } from 'react';

const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };
export default ProductsContext;
