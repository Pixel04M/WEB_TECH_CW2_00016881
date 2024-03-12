const farmersService = require('../services/farmersService');

// Get all farmers
exports.getAllFarmers = async (req, res, next) => {
  try {
    const farmers = await farmersService.getAllFarmers();
    res.json(farmers);
  } catch (error) {
    next(error);
  }
};

// Get farmer by ID
exports.getFarmerById = async (req, res, next) => {
  try {
    const farmer = await farmersService.getFarmerById(req.params.id);
    res.json(farmer);
  } catch (error) {
    next(error);
  }
};

// Create a new farmer
exports.createFarmer = async (req, res, next) => {
  try {
    const farmer = await farmersService.createFarmer(req.body);
    res.status(201).json(farmer);
  } catch (error) {
    next(error);
  }
};

// Update farmer details
exports.updateFarmer = async (req, res, next) => {
  try {
    const farmer = await farmersService.updateFarmer(req.params.id, req.body);
    res.json(farmer);
  } catch (error) {
    next(error);
  }
};

// Delete farmer
exports.deleteFarmer = async (req, res, next) => {
  try {
    await farmersService.deleteFarmer(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
