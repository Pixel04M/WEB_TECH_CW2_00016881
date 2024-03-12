const indexController = require('./indexController');
const farmersController = require('./farmersController');
const productsController = require('./productsController');

module.exports = {
  index: indexController,
  farmers: farmersController,
  products: productsController
};
