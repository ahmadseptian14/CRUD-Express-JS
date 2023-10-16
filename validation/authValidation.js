const { check } = require('express-validator');

const authValidation = [
    check('name').notEmpty().withMessage(' Name cannot be empty'),
    check('email').notEmpty().withMessage('Email cannot be empty').isEmail().withMessage('Invalid email'),
    check('password').notEmpty().withMessage('Password cannot be empty').isLength({ min: 8 }).withMessage('The password must have at least 8 characters'),
]

module.exports = authValidation;
