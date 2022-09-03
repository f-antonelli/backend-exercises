const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/check-auth');
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products.controller');

// GET routes
router.get('/:id?', getProducts);

router.use(isAdmin);

// POST routes
router.post('/', createProduct);

// PUT routes
router.put('/:id', updateProduct);

// DELETE routes
router.delete('/:id', deleteProduct);

module.exports = router;
