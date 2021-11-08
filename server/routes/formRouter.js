const express = require('express');
const router = express.Router();
var form_controller = require('./../Controllers/formController');

router.post('/create', form_controller.create_form);
router.get('/getById/:form_id', form_controller.get_form_by_id);
router.get('/getAll', form_controller.get_forms);
router.put('/update/:form_id', form_controller.update_form);
router.delete('/delete/:form_id', form_controller.delete_form);

module.exports = router;