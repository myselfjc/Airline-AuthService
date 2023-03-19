const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const userMiddleware = require('../middlewares/userMiddleware');

router.route('/signup').post(userMiddleware.validateUser,userController.signup);
router.route('/login').post(userController.login);
router.route('/authenticate').get(userController.isAuthenticated);

router.
    route('/:id')
    .delete(userController.deleteUser)
    .get(userController.getUser);



module.exports = router;