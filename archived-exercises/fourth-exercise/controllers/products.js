const Container = require("../models/class");
const HttpError = require("../models/http-error");

// Instance created .
let container = new Container("products.json");

const getAllProducts = async (req, res, next) => {
  let products;

  try {
    products = await container.getAll();
  } catch (err) {
    const error = new HttpError(
      "Fetching products failed, please try again later.",
      500
    );
    return next(error);
  }

  // # This error works if promise go well but there is not place with the id specified
  if (!products) {
    const error = new HttpError("Could not find any product.", 404);

    // # We use return next() because if there is an error, we want to stop the code from keep executioning
    return next(error);
  }

  res.send(products);
};

const getProductById = async (req, res, next) => {
  const productId = req.params.id; // => Get params value .
  let product;

  try {
    product = await container.getById(productId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a product.",
      500
    );
    return next(error);
  }

  if (!product) {
    const error = new HttpError(
      "Could not find a product for the provided id.",
      404
    );

    return next(error);
  }

  res.send(product);
};

const createProduct = async (req, res, next) => {
  const { title, price, thumbnail } = req.body;
  let newProduct;

  try {
    newProduct = await container.save({ title, price, thumbnail });
  } catch (err) {
    const error = new HttpError(
      "Creating product failed, please try again",
      500
    );

    return next(error);
  }

  res.status(201).json(newProduct);
};

const updateProduct = async (req, res, next) => {
  const { title, price, thumbnail } = req.body;
  const productId = req.params.id;

  let product, contentFile;
  try {
    await container.deleteById(Number(productId));

    contentFile = await container.getAll();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a product.",
      500
    );
    return next(error);
  }

  // Update values .
  product = {
    title,
    price,
    thumbnail,
    id: Number(productId),
  };

  contentFile.push(product);

  try {
    await container.updateFile(contentFile);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update product.",
      500
    );
    return next(error);
  }

  res.status(200).json(product);
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.id;

  try {
    await container.deleteById(Number(productId));
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete product.",
      500
    );

    return next(error);
  }

  res.status(200).json({ message: "Deleted product." });
};

exports.getProductById = getProductById;
exports.getAllProducts = getAllProducts;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
