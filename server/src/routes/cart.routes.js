const express = require('express');

const {
  getProductsCart,
  createCart,
  addProductCart,
  deleteCart,
  deleteProdFromCart,
} = require('../controllers/cart.controller');
const router = express.Router();

// GET routes
router.get('/:id/products', getProductsCart);

// POST routes
router.post('/', createCart);
router.post('/:id/products', addProductCart);

// DELETE routes
router.delete('/:id', deleteCart);
router.delete('/:id/products/:id_prod', deleteProdFromCart);

module.exports = router;
