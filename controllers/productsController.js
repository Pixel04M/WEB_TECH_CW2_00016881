const productsService = require('../services/productsService');

// Get all products
exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productsService.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// Get product by ID
exports.getProductById = async (req, res, next) => {
  try {
    const product = await productsService.getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

// Create a new product
exports.createProduct = async (req, res, next) => {
  try {
    const product = await productsService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

// Update product details
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await productsService.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

// Delete product
exports.deleteProduct = async (req, res, next) => {
  try {
    await productsService.deleteProduct(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
