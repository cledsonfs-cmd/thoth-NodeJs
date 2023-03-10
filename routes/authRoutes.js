const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

const checkAuth = require('../helpers/auth').checkAuth

router.get('/login',AuthController.login)
router.post('/login',AuthController.loginPost)
router.get('/logout',AuthController.logout)
router.get('/register',AuthController.register)
router.post('/register',AuthController.registerPost)


module.exports = router