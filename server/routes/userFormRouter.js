const express = require('express');
const router = express.Router();
var user_form_controller = require('./../Controllers/userFormController');

router.post('/create',user_form_controller.create_user_form);
router.put('/update/:userForm_id', user_form_controller.update_user_form);
module.exports = router;