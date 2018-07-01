const express = require('express');
const router = express.Router();


const userController = require('../controller/userController');

router.post('/signup', userController.singUpUser);

router.post('/signin', userController.singInUser);

module.exports = router;