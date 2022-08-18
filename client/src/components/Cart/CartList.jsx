import CartItem from './CartItems';

const CartList = ({ products }) => {
  console.log(products)
  return (
    <>
      {products.map(product => (
        <CartItem key={product.id} values={product} />
      ))}
    </>
  );
};

export default CartList;
