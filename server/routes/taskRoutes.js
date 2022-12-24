
const { getTasks, setTask, updateTask, deletTask } = require('../controllers/taskController')
const { authorization } = require('../midleweares/authMid')


const router = require('express').Router()

router.get('/', authorization, getTasks)
router.post('/', authorization, setTask)
router.put('/:id', authorization, updateTask)
router.delete('/:id', authorization, deletTask)


module.exports = router