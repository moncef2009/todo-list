
const { getTasks, setTask } = require('../controllers/taskController')
const { authorization } = require('../midleweares/authMid')


const router = require('express').Router()

router.get('/', authorization, getTasks)
router.post('/settask', authorization, setTask)


module.exports = router