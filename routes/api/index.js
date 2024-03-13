const express = require('express')
const products_router = require('./products')

const router = express.Router()

// registering child routers
router.use('/products', ticket_router)
module.exports = router
