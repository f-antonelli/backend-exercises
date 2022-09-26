const HttpError = require('../utils/HttpError');
const { ProductDAO } = require('../daos/index');

// Instance created .
let c = new ProductDAO();

const getProducts = async (req, res, next) => {
  let id = req.params.id;

  let product;
  try {
    if (id) {
      product = await c.getById(id);
    } else {
      product = await c.getAll();
    }
    res.send(product);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find a product.', 500);
    return next(error);
  }

  if (!product) {
    const error = new HttpError('Could not find a product for the provided id.', 404);

    return next(error);
  }
};

const createProduct = async (req, res, next) => {
  const newProduct = req.body;
  let result;

  try {
    result = await c.save(newProduct);
  } catch (err) {
    const error = new HttpError('Creating product failed, please try again', 500);

    return next(error);
  }

  res.status(201).json(newProduct);
};

const updateProduct = async (req, res, next) => {
  const product = req.body;
  let id = req.params.id;

  let result;
  try {
    result = await c.updateById(product, id);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not update product.', 500);
    return next(error);
  }

  res.status(200).json(result);
};

const deleteProduct = async (req, res, next) => {
  const id = req.params.id;

  let result;
  try {
    result = await c.deleteById(id);

    res.status(200).json(result);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete product.', 500);

    return next(error);
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
