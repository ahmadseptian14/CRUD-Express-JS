const express = require('express');
const {getAllLegalEntity, getLegalEntityById, createNewLegalEntity, updateLegalEntity, deleteLegalEntity} = require('../controllers/legalentities');
const legalEntityValidation = require('../validation/legalentityValidation');
// const upload = require('../middleware/multer');
const router = express.Router();

router.get('/', getAllLegalEntity);
router.get('/:id', getLegalEntityById);
router.post('/create', legalEntityValidation ,createNewLegalEntity);
router.patch('/update/:id', legalEntityValidation, updateLegalEntity);
router.delete('/delete/:id', deleteLegalEntity);

module.exports = router;
