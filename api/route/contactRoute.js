const express = require('express');
const router = express.Router();

//import controller
const contactController = require('../controller/contactController');

//getAllContact
router.get('/', contactController.getAllContact);

//postContact
router.post('/', contactController.postContact);

//getSingleContact
router.get('/:id', contactController.getSingleContact);

//updateContact
router.patch('/:id', contactController.updateContact);

//deleteContact
router.delete('/:id', contactController.deleteContact);

module.exports = router;