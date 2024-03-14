// Import specific service class
const product_service = require('../../../services/product')

// Define the product controller with its actions (methods)
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
    },
    // Update an existing product
    update(req, res) {
        const product = product_service.update(req.params.id, req.body)
        
        if (product) {
            res.json(product)
        } else {
            res.status(404).send('Product not found')
        }
    },
    // Delete a product
    delete(req, res) {
        const product = product_service.getById(req.params.id)
        
        if (product) {
            product_service.delete(req.params.id)
            res.status(204).send('Product deleted successfully')
        } else {
            res.status(404).send('Product not found')
        }
    }
}

module.exports = product_controller

