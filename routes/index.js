const express = require('express');
const router = express.Router();

// Define routes for the base URL '/'
router.get('/', (req, res) => {
  res.send('Welcome to the Farmers Market Online Directory');
});

module.exports = router;
