// import specific service class
const product_service = require('../../../services/product')

// mention the service's needed actions (methods)
const product_controller = {
    // Get all products
    getAll(req, res) {
        res.json(product_service.getAll())
    },
    // Create a new product
    create(req, res) {
        res.status(201).json(
            product_service.create(req, res)
        )
    }
}

module.exports = product_controller
 c