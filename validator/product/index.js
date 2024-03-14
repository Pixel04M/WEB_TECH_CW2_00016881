const { body } = require('express-validator');

const addProductValidation = () => {
    return [
        body('productName')
            .notEmpty().withMessage('Product name must not be empty')
            .isLength({ min: 2, max: 255 }).withMessage('Product name must be between 2 and 255 characters long'),
        body('harvestDate')
            .notEmpty().withMessage('Harvest date must not be empty')
            .isISO8601().withMessage('Invalid date format. Please use the ISO 8601 format (YYYY-MM-DD)'),
        body('farmLocation')
            .notEmpty().withMessage('Farm location must not be empty'),
        body('contactPhone')
            .notEmpty().withMessage('Contact phone must not be empty')
            .matches(/^\+\d{10}$/).withMessage('Invalid phone number format, it must be + followed by 10 digits'),
        body('quantity')
            .notEmpty().withMessage('Quantity must not be empty')
            .isInt({ min: 1 }).withMessage('Quantity must be a positive integer'),
    ];
};

module.exports = {
    addProductValidation
};
 