const express = require('express');
const {getAllLegalEntity, getLegalEntityById, createNewLegalEntity, updateLegalEntity, deleteLegalEntity} = require('../controller/legalentities');
const legalEntityValidation = require('../validation/legalentity');
const checkToken = require('../middleware/authorization');
// const upload = require('../middleware/multer');
const router = express.Router();

router.get('/', checkToken, getAllLegalEntity);
router.get('/:id', getLegalEntityById);
router.post('/create', legalEntityValidation ,createNewLegalEntity);
router.patch('/update/:id', legalEntityValidation, updateLegalEntity);
router.delete('/delete/:id', deleteLegalEntity);

module.exports = router;
