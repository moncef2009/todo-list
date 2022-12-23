const { register, login, logout } = require('../controllers/userController')

const router = require('express').Router()

router.post('/', register)
router.post('/login', login)
router.get('/logout', logout)


module.exports = router