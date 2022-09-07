const DAOFirebase = require('../models/daos/cart/DAOFirebase');
const DAOMongoDB = require('../models/daos/cart/DAOMongoDB');
const HttpError = require('../utils/HttpError');

// Instance created .
// let c = new DAOFirebase();
let c = new DAOMongoDB();

const getProductsCart = async (req, res, next) => {
  const id = req.params.id;

  let products;
  try {
    products = await c.getById(id);

    res.send(products.products);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find a cart.', 500);
    return next(error);
  }
};

const createCart = async (req, res, next) => {
  let result;

  try {
    result = await c.save({ products: [] });

    res.status(201).json(result);
  } catch (err) {
    const error = new HttpError('Creating cart failed, please try again', 500);

    return next(error);
  }
};

const addProductCart = async (req, res, next) => {
  const id = req.params.id;
  const product = req.body;
  let result, allProducts;

  try {
    allProducts = await c.getById(id);
    allProducts = allProducts.products;
    allProducts.push(product);
    
    result = await c.updateById({ products: allProducts }, id);

    res.status(200).json(result);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not add this product.', 500);
    return next(error);
  }
};

const deleteCart = async (req, res, next) => {
  const cartId = req.params.id;
  let result;
  try {
    result = await c.deleteById(cartId);

    res.status(200).json(result);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete cart.', 500);

    return next(error);
  }
};

const deleteProdFromCart = async (req, res, next) => {
  const idCart = req.params.id;
  const idProd = req.params.id_prod;
  let cart, result, productFiltered;

  try {
    cart = await c.getById(idCart);

    productFiltered = await cart.products.filter(product => product.id !== idProd);
    
    result = await c.updateById({ products: productFiltered }, idCart);

    res.status(200).json(result);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete product from cart.', 500);

    return next(error);
  }
};

module.exports = {
  createCart,
  deleteCart,
  addProductCart,
  getProductsCart,
  deleteProdFromCart,
};
