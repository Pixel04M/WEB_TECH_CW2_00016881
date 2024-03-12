const express = require('express');
const router = express.Router();

const farmersController = require('../controllers/farmersController');

// Define routes for farmers
router.get('/', farmersController.getAllFarmers);
router.get('/:id', farmersController.getFarmerById);
router.post('/', farmersController.createFarmer);
router.put('/:id', farmersController.updateFarmer);
router.delete('/:id', farmersController.deleteFarmer);

// Sample array of farmers (replace with actual data from your application)
const farmers = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' }
];
// GET request to the '/farmers' route
router.get('/', (req, res) => {
    // Render the 'farmers/index' view and pass data to it
    res.render('farmers/index', { title: 'Farmers List', farmers: farmers });
  });
module.exports = router;

