const { body } = require('express-validator');
const { body } = require('express-validator');

const addTicketValidation = () => {
  return [
    body('eventName')
      .notEmpty().withMessage('Event name must not be empty')
      .isLength({ min: 8, max: 255 }).withMessage('Event name must be between 8 and 255 characters long'),
    body('eventDateTime')
      .notEmpty().withMessage('Event date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
    body('venue')
      .notEmpty().withMessage('Event venue must not be empty'),
    body('contactPhone')
      .notEmpty().withMessage('Contact phone must not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it must be +998xxxxxxxxx'),
    body('seat')
      .notEmpty().withMessage('Seat must not be empty'),      
  ];
};

module.exports = {
    addTicketValidation
};
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
