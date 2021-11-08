const express = require('express');
const router = express.Router();
var role_controller = require('./../Controllers/roleController');

router.post('/create', role_controller.create_role);

module.exports = router;