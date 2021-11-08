const express = require('express');
const router = express.Router();
var type_controller = require('./../Controllers/typeController');

router.post('/create', type_controller.create_type);

module.exports = router;