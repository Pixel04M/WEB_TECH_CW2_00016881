const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET request to render the add product form
router.get('/add', productController.renderAddProductForm);

// POST request to handle the form submission for adding a new product
router.post('/add', productController.addProduct);

module.exports = router;
