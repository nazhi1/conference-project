const express = require('express')
const userController = require('../controllers/user')
const isAuth = require('../middleware/is-auth')

const router = express.Router()

router.post('/auth/register',userController.registerUser);
router.post('/auth/login', userController.login)
router.get('/users',isAuth,userController.getUsers)

module.exports = router;
