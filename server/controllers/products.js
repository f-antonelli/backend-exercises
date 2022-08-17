const Container = require('../models/class-products');
const HttpError = require('../models/http-error');

// Instance created .
let container = new Container('products.json');

const getProducts = async (req, res, next) => {
  const productId = req.params.id; // => Get params value .
  let product;
  try {
    if (productId) {
      product = await container.getById(productId);
    } else {
      product = await container.getAll();
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
  let newProduct;

  try {
    newProduct = await container.save({
      title,
      price,
      img,
      description,
      code,
      stock,
    });
  } catch (err) {
    const error = new HttpError('Creating product failed, please try again', 500);

    return next(error);
  }

  res.status(201).json(newProduct);
};

const updateProduct = async (req, res, next) => {
  const { title, price, img, description, stock } = req.body;
  const productId = req.params.id;

  let product, contentFile;
  try {
    await container.deleteById(Number(productId));

    contentFile = await container.getAll();
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find a product.', 500);
    return next(error);
  }

  // Update values .
  product = {
    title,
    price,
    img,
    description,
    stock,
    id: Number(productId),
    timestamp: Date.now(),
  };

  contentFile.push(product);

  try {
    await container.updateFile(contentFile);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not update product.', 500);
    return next(error);
  }

  res.status(200).json(product);
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.id;

  try {
    await container.deleteById(Number(productId));
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete product.', 500);

    return next(error);
  }

  res.status(200).json({ message: 'Deleted product.' });
};

exports.getProducts = getProducts;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
