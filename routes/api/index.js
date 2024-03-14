/**
 * Express router for API endpoints.
 * @module routes/api/index
 */
const express = require('express')
const product_router = require('./product')

const router = express.Router()

// registering child routers
router.use('/product', product_router)
module.exports = router
 