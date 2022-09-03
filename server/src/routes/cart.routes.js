const express = require('express');

const cartController = require('../controllers/cart');
const router = express.Router();

// GET routes
router.get('/:id/products', cartController.getProductsCart);

// POST routes
router.post('/', cartController.createCart);
router.post('/:id/products', cartController.addProductCart);

// DELETE routes
router.delete('/:id', cartController.deleteCart);
router.delete('/:id/products/:id_prod', cartController.deleteProdFromCart);

module.exports = router;
