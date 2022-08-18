const express = require('express');
const productsController = require('../controllers/products');
const isAdmin = require('../middleware/check-auth');
const router = express.Router();

// GET routes
router.get('/:id?', productsController.getProducts);

router.use(isAdmin);

// POST routes
router.post('/', productsController.createProduct);

// PUT routes
router.put('/:id', productsController.updateProduct);

// DELETE routes
router.delete('/:id', productsController.deleteProduct);

module.exports = router;