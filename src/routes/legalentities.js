const express = require('express');
const legalentityController = require('../controller/legalentities');
const validate = require('../validation/legalentity');
// const upload = require('../middleware/multer');
const router = express.Router();

router.get('/', legalentityController.getAllLegalEntity);
router.post('/create', validate.emailValidation, validate.validateField, legalentityController.createNewLegalEntity);
router.patch('/update/:id', legalentityController.updateLegalEntity);
router.delete('/delete/:id', legalentityController.deleteLegalEntity);

module.exports = router;