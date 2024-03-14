const express = require('express');
const { validationResult } = require('express-validator');
const { addTProducttValidation } = require('../../../validators/product');

const router = express.Router();
const ticket_controller = require('../../../controllers/api/product');

// Define API routes for products
router.get('/', (req, res)=>{
    ticket_controller.getAll(req, res);
});

router.post('/', addProductValidation(), (req, res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    ticket_controller.create(req, res)
})

module.exports = router;
