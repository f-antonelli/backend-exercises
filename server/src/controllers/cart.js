const Cart = require('../models/class-cart');
const Container = require('../models/containers/FS');
const HttpError = require('../utils/HttpError');

// Instance created .
let cart = new Cart('cart.json');
let container = new Container('products.json');

const getProductsCart = async (req, res, next) => {
  const cartId = req.params.id;

  let products;
  try {
    products = await cart.getCartById(Number(cartId));

    res.send(products.products);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find a cart.', 500);
    return next(error);
  }
};

const createCart = async (req, res, next) => {
  let idCart;

  try {
    idCart = await cart.createCart();
  } catch (err) {
    const error = new HttpError('Creating cart failed, please try again', 500);

    return next(error);
  }

  res.status(201).json({ id: idCart });
};

const addProductCart = async (req, res, next) => {
  const cartId = req.params.id;
  const product = req.body;

  try {
    await cart.saveProduct(Number(cartId), product);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not add this product.', 500);
    return next(error);
  }

  res.status(200).json({ message: 'Product added' });
};

const deleteCart = async (req, res, next) => {
  const cartId = req.params.id;

  try {
    await cart.deleteCart(Number(cartId));
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete cart.', 500);

    return next(error);
  }

  res.status(200).json({ message: 'Cart deleted.' });
};

const deleteProdFromCart = async (req, res, next) => {
  const idCart = req.params.id;
  const idProd = req.params.id_prod;

  try {
    await cart.delProdFromCart(Number(idCart), Number(idProd));
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete product from cart.', 500);

    return next(error);
  }

  res.status(200).json({ message: 'Product from cart deleted.' });
};

exports.createCart = createCart;
exports.deleteCart = deleteCart;
exports.addProductCart = addProductCart;
exports.getProductsCart = getProductsCart;
exports.deleteProdFromCart = deleteProdFromCart;
