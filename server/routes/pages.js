const express = require('express')
const router = express.Router()
var page_controller = require('./../Controllers/pageController')

router.post('/create', page_controller.create_page);
router.get('/getAll', page_controller.get_pages);
router.get('/getById/:page_id', page_controller.get_get_page_by_id);
router.put('/update/:page_id', page_controller.update_page);
router.delete('/delete/:page_id', page_controller.delete_page);

module.exports = router
