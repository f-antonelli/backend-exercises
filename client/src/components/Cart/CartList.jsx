import CartItem from './CartItems';

const CartList = ({ products }) => {
  console.log(products);
  return (
    <>
      {products.map((product, index) => (
        <CartItem key={index} values={product} />
      ))}
    </>
  );
};

export default CartList;
