const knex = require('knex');
const knexConfig = require('../knexfile-mariadb');
const db = knex(knexConfig);

const Container = require('../models/class-products');
const HttpError = require('../models/http-error');

// Instance created .
let c = new Container(db, 'products');

const getProducts = async (req, res, next) => {
  const productId = req.params.id; // => Get params value .
  let product;
  try {
    if (productId) {
      product = await c.getById(productId);
    } else {
      product = await c.getAll();
    }
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find a product.', 500);
    return next(error);
  }

  if (!product) {
    const error = new HttpError('Could not find a product for the provided id.', 404);

    return next(error);
  }

  res.send(product);
};

const createProduct = async (req, res, next) => {
  const { title, price, img, description, code, stock } = req.body;

  const newProduct = {
    title,
    price,
    img,
    description,
    code,
    stock,
  };

  try {
    const result = await c.save(newProduct);

    res.status(201).send(result);
  } catch (err) {
    const error = new HttpError('Creating product failed, please try again', 500);

    return next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const { title, price, img, description, code, stock } = req.body;
  const productId = req.params.id;

  // Update values .
  const product = {
    id: Number(productId),
    title,
    price,
    img,
    description,
    stock,
    code,
  };

  try {
    await c.updateDB(product);

    res.status(200).send('Product updated.');
  } catch (err) {
    const error = new HttpError('Something went wrong, could not update product.', 500);
    return next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.id;

  try {
    await c.deleteById(Number(productId));

    res.status(200).json({ message: 'Product deleted.' });
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete product.', 500);

    return next(error);
  }
};

exports.getProducts = getProducts;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
