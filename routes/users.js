var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/',userController.getUserList);
router.get('/add-new',userController.getAddNewUser)
router.post('/add-new',userController.postAddNewUser)
router.get('/user-delete/:userId',userController.getUserDelete);
router.get('/user-edit/:userId',userController.getUserEdit);
router.post('/update',userController.postUpdateUser)
module.exports = router;
