const { check} = require('express-validator');

const emailValidation = [
    check('pic_email').isEmail().withMessage('Email invalid'),
  ];

const fieldValidation = [
    check('pic_name').notEmpty().withMessage('PIC Name cannot be empty'),
    check('pic_email').notEmpty().withMessage('Email cannot be empty'),
    check('pic_position').notEmpty().withMessage('PIC Position cannot be empty'),
    check('company_name').notEmpty().withMessage('Company Name cannot be empty'),
    check('company_mobile').notEmpty().withMessage('Company Mobile cannot be empty'),
    check('company_npwp').notEmpty().withMessage('Company NPWP cannot be empty'),
    check('company_address').notEmpty().withMessage('Company Address cannot be empty'),
]

  module.exports = {
    emailValidation,
    fieldValidation
};
