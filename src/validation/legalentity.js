const { body} = require('express-validator');

const emailValidation = [
    body('pic_email').isEmail().withMessage('Email invalid'),
  ];

const validateField = [
    body('pic_name').notEmpty(),
    body('pic_email').notEmpty(),
    body('pic_position').notEmpty(),
    body('company_name').notEmpty(),
    body('company_mobile').notEmpty(),
    body('company_npwp').notEmpty(),
    body('company_address').notEmpty(),
]

  module.exports = {
    emailValidation,
    validateField
};
