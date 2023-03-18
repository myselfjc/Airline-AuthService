const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const userMiddleware = require('../middlewares/userMiddleware');

router.route('/').post(userMiddleware.validateUser,userController.createUser);

router.
    route('/:id')
    .delete(userController.deleteUser)
    .get(userController.getUser);

module.exports = router;