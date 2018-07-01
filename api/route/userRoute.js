const express = require('express');
const router = express.Router();
const authenticatios = require('../middlewares/protector')

const userController = require('../controller/userController');

router.post('/signup',authenticatios, userController.singUpUser);

router.post('/signin', userController.singInUser);

module.exports = router;