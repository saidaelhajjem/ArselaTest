const express = require('express');
const router = express.Router();
var user_controller = require('./../Controllers/userController');

router.post('/create', user_controller.register);
router.post('/login', user_controller.login);


module.exports = router;