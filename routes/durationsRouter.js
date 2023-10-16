const express = require('express');
const {getAllDuration} = require('../controllers/durations');
// const legalEntityValidation = require('../validation/legalentity');
// const checkToken = require('../middleware/authorization');
// const upload = require('../middleware/multer');
const router = express.Router();

router.get('/', getAllDuration);
// router.get('/:id', getLegalEntityById);
// router.post('/create', legalEntityValidation ,createNewLegalEntity);
// router.patch('/update/:id', legalEntityValidation, updateLegalEntity);
// router.delete('/delete/:sid', deleteLegalEntity);

module.exports = router;
