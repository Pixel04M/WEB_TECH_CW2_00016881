const express = require('express');
const router = express.Router();

// Import index controller
const indexController = require('../controllers/index');

// Define routes
router.get('/', indexController.homePage); // Home page route
router.get('/about', indexController.aboutPage); // About page route
router.get('/contact', indexController.contactPage); // Contact page route

module.exports = router; // Export router
