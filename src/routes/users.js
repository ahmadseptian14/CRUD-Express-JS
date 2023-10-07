const express = require('express');
const userController = require('../controller/users');

const router = express.Router();

router.get('/', userController.getAllUser);
router.post('/', userController.createNewUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
