const asyncHandler = require('express-async-handler')
const Task = require('../models/Task')


const getTasks = asyncHandler(async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id })
        res.status(200).json(tasks)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
)

const setTask = asyncHandler(async (req, res) => {
    try {
        const task = await Task.create({
            user: req.user.id,
            title: req.body.title,
            description: req.body.description,
            createdAt: Date.now(),
            deadline: new Date(req.body.deadline)
        })

        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
)

const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
        res.status(404).json({ message: 'pas de tache pour cette Id' })
    }


    if (!req.user) {
        res.status(401).json({ message: 'User not found' })
    }

    if (task.user.toString() !== req.user.id) {
        res.status(401).json({ message: 'User not authorized' })
    }

    const updateTask = await Task.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        deadline: new Date(req.body.deadline)
    }, { new: true })

    res.status(200).json(updateTask)
}
)

const deletTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
        res.status(404).json({ message: 'pas de tache pour cette Id' })
    }


    if (!req.user) {
        res.status(401).json({ message: 'User not found' })
    }

    if (task.user.toString() !== req.user.id) {
        res.status(401).json({ message: 'User not authorized' })
    }

    await task.remove()

    res.status(200).json({ id: req.params.id })

}
)



module.exports = { getTasks, setTask, updateTask, deletTask }