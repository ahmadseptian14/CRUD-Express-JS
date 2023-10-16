const express = require('express');
const { authRegister, authLogin } = require('../controllers/auth');
const authValidation = require('../validation/authValidation');
const router = express.Router();

router.post('/register', authValidation, authRegister);
router.post('/login', authLogin);

module.exports = router;
